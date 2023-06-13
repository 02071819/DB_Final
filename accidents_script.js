db.getCollection("accidents").find({"Number_of_Casualties":{$gt:2},
"Accident_Severity":{$eq:3}})
