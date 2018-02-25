from flask import Flask
from werkzeug.contrib.cache import SimpleCache

app = Flask(__name__)

import json
from subzone_recommender import compute_subzones


#### APIs ####
cache = SimpleCache()

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/recommend_subzone",methods=["POST"])
def recommend_subzone():
	params = json.loads(request.get_json())
	subzone_list = compute_subzones(**params)
	return json.dumps(subzone_list)

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80)