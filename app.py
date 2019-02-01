from flask import Flask, jsonify, render_template
from mysql_conn import password as passw
import pymysql


connection = pymysql.connect(host='localhost',
                             user='root',
                             password = passw,
                             db='fooddesert',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

app = Flask(__name__)


@app.route("/")
def welcome():
        """Food Deserts in the United States"""
        return render_template("index.html")
            
        )

@app.route("/api/v1.0/fooddesert")
def Return_db(name):
        """Return a list of all fooddesert data."""
        print(name)
        
        try:
            with connection.cursor() as cursor:
                
                sql = "USE fooddesert, Select * FROM censusdf LEFT JOIN fooddf ON fooddf.CensusTract = censusdf.GEOID
                print(sql)
                cursor.execute(sql)
                fooddesert = cursor.fetchall()
                print(type(fooddesert))
                for locations in fooddesert:
                    
                    #search_term = locations["Name"].replace(" ", "").lower()
                    return jsonify(locations)
                    
                    
        except:
            pass
        return jsonify({"error": f"Now you fucked up"}), 404
            
             

if __name__ == "__main__":
    app.run(debug=True)