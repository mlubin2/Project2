USE fooddesert ;
Select * FROM censusdf
LEFT JOIN fooddf
ON fooddf.CensusTract = censusdf.GEOID;
