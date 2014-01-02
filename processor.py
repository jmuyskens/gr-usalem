import csv
import json
import sys
import geopy
import time

g = geopy.geocoders.GoogleV3()

csvfile = open(sys.argv[1], 'rU')
jsonfile = open(sys.argv[1].replace('.csv','.json'), 'w')

reader = csv.DictReader(csvfile)

masterlist = []

for row in reader:
    print row['address']    
    place, (lat, lng) = g.geocode(row['address'])
    print (lat, lng)
    row['lat'] = lat
    row['lng'] = lng
    masterlist.append(row)
    time.sleep(0.05) # so our api doesn't get mad at us

json.dump(masterlist, jsonfile)
