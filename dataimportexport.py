import pandas as pd
import os
import csv
from sqlalchemy import create_engine
import mysql_conn


cell_load = "302.csv"
cell_df = pd.read_csv(cell_load, encoding= "utf8")

connection_string= (f"root:{mysql_conn.password}@localhost/celldf?charset=utf8")
engine = create_engine(f'mysql://{connection_string}')

cell_df.to_sql(name="celldf", con=engine, if_exists="replace", index=False)