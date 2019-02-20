from flask import Flask, jsonify, render_template
from mysql_conn import password as passw
import pymysql
import sys
import pandas as pd


connection = pymysql.connect(host='localhost',
                             user='root',
                             password = passw,
                             db='fooddesert',
                             charset='utf8',
                             cursorclass=pymysql.cursors.DictCursor)


sys.path.append("static/js")
sys.path.append("static/css")
sys.path.append("static/images")

app = Flask(__name__)


@app.route("/")
def welcome():
        """Food Deserts in the United States"""
        return render_template("index.html")
    
@app.route("/pie.html")
def pie():
        """Food Deserts in the United States"""
        return render_template("pie.html")


@app.route("/api/v1.0/fooddesert/<region>")
def Return_db(region):
        """Return a list of all fooddesert data."""
        
        try:
            print ("half way there")
            
            with connection.cursor() as cursor:
                
                sql = f"SELECT * FROM fooddesertloc WHERE region = %s;"
                print("sql")

                cursor.execute(sql,(region, ))
                fooddesert = cursor.fetchall()
                print(type(fooddesert))
                outputs = []
                for locations in fooddesert:
                    outputs.append(locations) 
                    #search_term = locations["Name"].replace(" ", "").lower()
            return jsonify(outputs)
            return jsonify({"error": f"no errors found"}), 404        
                    
        except Exception as e:
            print(e)

            pass 
        return jsonify({"error": f"Error in code check execptions"}), 404
            
@app.route("/loadChartData")
def loadCSV():
    return jsonify("fooddesert.csv")

if __name__ == "__main__":
    app.run(debug=True)