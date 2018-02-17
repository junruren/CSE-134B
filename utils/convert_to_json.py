import pandas as pd
import json

df = pd.read_csv('vehicle.csv')

myobj = {}
for group, row in df.groupby(['make']):
    myobj[group] = list(row['model'].values)

with open('vehicle.json', 'w') as outfile:
    outfile.write(json.dumps(myobj, indent=4))
