Group 5
Marie Deshommes
Cole Barcia
Mike Lubin
Melissa Medina
Pablo Barbatto 

Central Question: Where are food desert located in the united states and how promonent is the issue?


How to run the program for insights:
1. Schema.sql:
  DROP database if exists fooddesert;
  Create DATABASE fooddesert character set UTF8 collate utf8_bin;
  USE fooddesert;
1.b. mysql_conn.py:
  Make sure you imput your password. 
2. Run python file dataimportexport.py:
  This file will collect the data from the two CSV files and 
  Create a new dataframe to be able to import easily to mySQL with
  SqlAlchemy.
3.Run the python file app.py:
  This will host the api and the website.
4.To access the site you will need to be go to this URL :
  http://127.0.0.1:5000/
5.To see the restfull API us the following the URL divided into 5 regions:
  http://127.0.0.1:5000/api/v1.0/fooddesert/northeast
  http://127.0.0.1:5000/api/v1.0/fooddesert/west
  http://127.0.0.1:5000/api/v1.0/fooddesert/midwest
  http://127.0.0.1:5000/api/v1.0/fooddesert/south
  http://127.0.0.1:5000/api/v1.0/fooddesert/1
  
  
