import pandas as pd
import os
import csv
from sqlalchemy import create_engine
import mysql_conn

census_load = "censuscoor.csv"
census_df = pd.read_csv(census_load, encoding= "utf8")
census_df = census_df[["GEOID","INTPTLAT","INTPTLONG"]]

food_load = "fooddesert.csv"
food_df = pd.read_csv(food_load, encoding= "utf8")
food_df = food_df[["CensusTract","State","County","Urban",
                   "POP2010", "OHU2010","PovertyRate","MedianFamilyIncome",
                   "LAhalfand10","LA1and20","LAPOP05_10","LAPOP1_20","LALOWI05_10",
                   "LALOWI1_20","lakidshalf","laseniorshalf",
                   "lahunvhalf","lasnaphalf","TractLOWI","TractKids","TractSeniors",
                   "TractWhite","TractBlack","TractAsian","TractNHOPI","TractAIAN",
                   "TractOMultir","TractHispanic","TractHUNV","TractSNAP"]]

combine_df = census_df.merge(food_df, left_on= "GEOID", right_on="CensusTract")  
combine_df = combine_df[["GEOID","INTPTLAT","INTPTLONG","State","County","Urban",
                   "POP2010", "OHU2010","PovertyRate","MedianFamilyIncome",
                   "LAhalfand10","LA1and20","LAPOP05_10","LAPOP1_20","LALOWI05_10",
                   "LALOWI1_20","lakidshalf","laseniorshalf",
                   "lahunvhalf","lasnaphalf","TractLOWI","TractKids","TractSeniors",
                   "TractWhite","TractBlack","TractAsian","TractNHOPI","TractAIAN",
                   "TractOMultir","TractHispanic","TractHUNV","TractSNAP"]]                 


northeast = ['Connecticut','Maine','Massachusetts','New Hampshire','Rhode Island','Vermont','New Jersey','New York','Pennsylvania']
midwest = ['Illinois','Indiana','Michigan','Ohio','Wisconsin','Iowa','Kansas','Minnesota','Missouri','Nebraska','North Dakota','South Dakota']
south = ['Delaware','Florida','Georgia','Maryland','North Carolina','South Carolina', 'Virginia','District of Columbia',
         'West Virginia','Alabama','Kentucky','Mississippi','Tennessee','Arkansas','Louisiana','Oklahoma','Texas']
west = ['Arizona','Colorado','Idaho','Montana','Nevada','New Mexico','Utah','Wyoming','California','Oregon','Washington']
combine_df["region"] = 1

combine_df.loc[combine_df['State'].isin(northeast), 'region'] = 'northeast'
combine_df.loc[combine_df['State'].isin(midwest), 'region'] = 'midwest'
combine_df.loc[combine_df['State'].isin(south), 'region'] = 'south'
combine_df.loc[combine_df['State'].isin(west), 'region'] = 'west'

connection_string= (f"root:{mysql_conn.password}@localhost/fooddesert?charset=utf8")
engine = create_engine(f'mysql://{connection_string}')

combine_df.to_sql(name="fooddesertloc", con=engine, if_exists="replace", index=False)
