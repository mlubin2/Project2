from flask import Flask, jsonify, render_template
from mysql_conn import password as passw
import pymysql


connection = pymysql.connect(host='localhost',
                             user='root',
                             password = passw,
                             db='fooddesert',
                             charset='utf8',
                             cursorclass=pymysql.cursors.DictCursor)

app = Flask(__name__)


@app.route("/")
def welcome():
        """Food Deserts in the United States"""
        return render_template("index.html")
    

@app.route("/api/v1.0/fooddesert/<int:page>")
def Return_db(page):
        """Return a list of all fooddesert data."""
        
        try:
            print ("half way there")
            
            with connection.cursor() as cursor:
                
                sql = f"Select * FROM censusdf LEFT JOIN fooddf ON fooddf.CensusTract = censusdf.GEOID LIMIT {page*2000},2000;"
                print("sql")

                cursor.execute(sql)
                fooddesert = cursor.fetchall()
                print(type(fooddesert))
                outputs = []
                for locations in fooddesert:
                    outputs.append(locations) 
                    #search_term = locations["Name"].replace(" ", "").lower()
            return jsonify(outputs)
            return jsonify({"error": f"Now you didnt fuck up"}), 404        
                    
        except Exception as e:
            print(e)

            pass 
        return jsonify({"error": f"Now you fucked up"}), 404
            
             

if __name__ == "__main__":
    app.run(debug=True)