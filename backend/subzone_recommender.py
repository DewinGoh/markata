import pandas as pd
import numpy as np
import requests
from datetime import datetime

from API_secret import consumerKey, consumerSecret
from frontend_input_format import critical_params_format
from API_urls import discretevisit_api

def compute_subzones(**kwargs):
	"""
	Takes in arguments with specific stipulated conditions. 
	Computation is done on a naive bayes approach, where 
	the calculation is taken from the previous month's averages. 
	"""
	query_dict = dict()
	day_of_week = datetime.today().weekday()
	for key, val in critical_params_format.items():
		query_input = kwargs.get(key)
		if query_input:
			query_dict[key] = val
		else:
			continue

	dates = kwargs.get("date")
	planning_regions = kwargs.get("planning_region")
	all_data = dict()
	for date in dates:
		for planning_region in planning_regions:
			query = gen_query(date,planning_region,**query_dict)
			all_data["date"] = query_discrete_visit_api(query)

	subzones = recommend_subzones(all_data)

	return subzones

def query_discrete_visit_api(query):
	queryResponse = requests.post(discretevisit_api,
		data = query,
		headers = {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'})

	return json.loads(queryResponse.json())


# Construct the query to the API
def gen_query(date,planning_region,**kwargs):
    queryBody = {
     "date": date,
     "location": {
       "locationType": "locationHierarchyLevel",
       "levelType": "discrete_visit_planningregion",
       "id": planning_region
     },
     "queryGranularity": {
       "type": "period",
       "period": "PT5M"
     },
     "dimensionFacets": ["discrete_visit_subzone","agent_gender","agent_race"],
     "aggregations": [
       {
         "metric": "unique_agents",
         "type": "hyperUnique",
         "describedAs": "footfall"
       }
     ]
    }
    
    # insert multiple filters

    len_params = len(kwargs)
    for k,v in kwargs.items():
    	if len(kwargs)-len_params<=2:
    		queryBody.append({"type":"bound","dimension":v})
    	else:
    		queryBody.append({"type":"and","fields":[]})
    
    return json.dumps(queryBody)


# TODO: recommend subzones algo
 def recommend_subzones(data):
 	recommended_subzones = {
  "2018-02-01": {
    morning: {
      subzone: "BDSZ01",
      size: 842
    }
    }
    }
 	return recommended_subzones