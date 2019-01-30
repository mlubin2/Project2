import pandas as pd
import os
import csv
from sqlalchemy import create_engine
import mysql_conn


food_load = "fooddesert.csv"
food_df = pd.read_csv(food_load, encoding= "utf8")

food_df = food_df[["CensusTract","State","County","Urban",
                   "POP2010", "OHU2010","PovertyRate","MedianFamilyIncome",
                   "LAhalfand10","LA1and20","LAPOP05_10","LAPOP1_20","LALOWI05_10",
                   "LALOWI1_20","lakidshalf","lakidshalfshare","laseniorshalf",
                   "laseniorshalfshare","lahunvhalf","lahunvhalfshare","lasnaphalf",
                   "lasnaphalfshare","TractLOWI","TractKids","TractSeniors","TractWhite",
                   "TractBlack","TractAsian","TractNHOPI","TractAIAN","TractOMultir",
                   "TractHispanic","TractHUNV","TractSNAP"]]

connection_string= (f"root:{mysql_conn.password}@localhost/fooddf?charset=utf8")
engine = create_engine(f'mysql://{connection_string}')

food_df.to_sql(name="fooddf", con=engine, if_exists="replace", index=False)