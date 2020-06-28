# coding-challenge

Create a new project 
npm init --yes

Install dependencies
npm install apollo-server graphql

touch index.js

npm install --save sequelize sqlite3

npm install --save-dev sequelize-cli

npm install --save sqlite3

node_modules/.bin/sequelize init

{
  "development": {
    "dialect": "sqlite",
    "storage": "./database.sqlite"
  }
}

node_modules/.bin/sequelize model:create --name Truck --attributes applicant:string, fooditems:string, cnn:string, address:string, latitude:string, longitude:string

node_modules/.bin/sequelize model:create --name Schedule --attributes locationdesc:string, start24:string, end24:string, dayofweekstr:string, optionaltext:string

node_modules/.bin/sequelize db:migrate


#create new migration
node_modules/.bin/sequelize migration:create --name modify_users_add_new_fields
# Noshedule
[
  {
    objectid: '1334819',
    applicant: 'tacos y pupusas los trinos',
    cnn: '9158000',
    locationdescription: 'MISSION ST: AVALON AVE to COTTER ST (4368 - 4439)',
    address: '4384 MISSION ST',
    blocklot: '6798004',
    block: '6798',
    lot: '004',
    permit: '19MFF-00048',
    status: 'REQUESTED',
    x: '6002680.03',
    y: '2093158.531',
    latitude: '37.7275665375917',
    longitude: '-122.432969701989',
    schedule: 'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00048&ExportPDF=1&Filename=19MFF-00048_schedule.pdf',
    received: '2019-07-03',
    priorpermit: '0',
    location: { type: 'Point', coordinates: [Array] },
    ':@computed_region_yftq_j783': '9',
    ':@computed_region_p5aj_wyqh': '7',
    ':@computed_region_rxqg_mtj9': '6',
    ':@computed_region_bh8s_q3mv': '28861',
    ':@computed_region_fyvs_ahh9': '25'
  },
  {
    objectid: '1353225',
    applicant: 'Treats by the Bay LLC',
    facilitytype: 'Truck',
    cnn: '7034000',
    locationdescription: 'HOWARD ST: MALDEN ALY to 02ND ST (574 - 599)',
    address: '201 02ND ST',
    blocklot: '3736097',
    block: '3736',
    lot: '097',
    permit: '19MFF-00111',
    status: 'REQUESTED',
    fooditems: 'Prepackaged Kettlecorn',
    x: '6013265.85',
    y: '2114515.053',
    latitude: '37.7868016505971',
    longitude: '-122.397871635003',
    schedule: 'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00111&ExportPDF=1&Filename=19MFF-00111_schedule.pdf',   
    received: '2019-07-31',
    priorpermit: '0',
    expirationdate: '2020-07-15T00:00:00.000',
    location: { type: 'Point', coordinates: [Array] },
    ':@computed_region_yftq_j783': '6',
    ':@computed_region_p5aj_wyqh': '2',
    ':@computed_region_rxqg_mtj9': '9',
    ':@computed_region_bh8s_q3mv': '28855',
    ':@computed_region_fyvs_ahh9': '6'
  },
# shedule
[
  {
    dayorder: '1',
    dayofweekstr: 'Monday',
    location: '773 MARKET ST',
    locationdesc: 'Pushcart located on Market St. 7 linear feet West of the Fire Hydrant. Must maintain 8 linear feet clearance from Street Artist Booth M22. Reference Street Artist 
    optionaltext: 'Kettle Corn, Funnel Cakes, Lemonade, Beverages, Flan, Hot Dogs, Falafel, Hot and Cold Sandwiches, French Fries, Baklava and Pastries',
    locationid: '1341056',
    start24: '10:00',
    end24: '18:00',
    applicant: 'Kettle Corn Star',
    x: '6011164.82111',
    y: '2114324.40143',
    latitude: '37.786160934428665',
    longitude: '-122.40512731130576',
  },
  {
    dayorder: '5',
    dayofweekstr: 'Friday',
    starttime: '10AM',
    endtime: '6PM',
    permit: '19MFF-00105',
    location: '773 MARKET ST',
    locationdesc: 'Pushcart located on Market St. 7 linear feet West of the Fire Hydrant. Must maintain 8 linear feet clearance from Street Artist Booth M22. Reference Street Artist Map #14 (http://www.sfartscommission.org/street_artists_program/maps/index.html)',
    optionaltext: 'Kettle Corn, Funnel Cakes, Lemonade, Beverages, Flan, Hot Dogs, Falafel, Hot and Cold Sandwiches, French Fries, Baklava and Pastries',
    locationid: '1341056',
    start24: '10:00',
    end24: '18:00',
    cnn: '8746103',
    addr_date_create: '2011-11-15T13:48:04.000',
    addr_date_modified: '2011-11-15T13:50:08.000',
    block: '3706',
    lot: '096',
    coldtruck: 'N',
    applicant: 'Kettle Corn Star',
    x: '6011164.82111',
    y: '2114324.40143',
    latitude: '37.786160934428665',
    longitude: '-122.40512731130576',
    location_2: { type: 'Point', coordinates: [Array] }
  },
  