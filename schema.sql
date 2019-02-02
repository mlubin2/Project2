DROP database if exists fooddesert;
Create DATABASE fooddesert character set UTF8 collate utf8_bin;
USE fooddesert;
SELECT * FROM fooddesertloc WHERE region = 'south';