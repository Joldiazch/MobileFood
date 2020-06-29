# MobileFood! Coding Challenge - Chiper

The development of this web application consisted of Designing and implementing a platform that would allow people to know what types of food trucks can be found near a specific location on a map.
The data was taken from [DataSF](http://www.datasf.org/) : [Food Trucks](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat). This allows anyone in the S.F. area to know which are the nearest food trucks, what are their working hours, and what kind of meals could be consumed in each one.

You can go to the platform [here.](https://mobilefoodreactapp.herokuapp.com/)
As it is shown in the file load-truck-data.js for this sample 5 data were loaded since at the moment sqllite3 is used only although in a beginning it was planned to use RDS and postgresql. these data are rendered in the map and can be.
The project is divided in Frontend and Backend, the first one is located in [this branch](https://github.com/Joldiazch/MobileFood/tree/reactapp), the backend in [this one](https://github.com/Joldiazch/MobileFood/tree/api-graphql).
both deployed in heroku.

## Technology Stack
**Backend**
- Node.js
- Apollo server
- Sequelize ORM
- GraphQl
- PostgreSQL as production DB
- Sqlite3 as developer DB

**Front-end**
- React.js
- Apollo client
- MapBox and MapGl
- [Material-UI Kit](https://demos.creative-tim.com/material-kit-react/?_ga=2.168026337.1341968605.1593270261-2012945262.1593270261#/documentation/tutorial)

## Entity relationship model

This Model is built in the models folder in the [api-graphql branch.](https://github.com/Joldiazch/MobileFood/tree/api-graphql)

![enter image description here](https://i.ibb.co/KbJk17x/Mobile-FOOD.png)

## Architecture

![enter image description here](https://i.ibb.co/b3z8Cs5/Blank-Diagram-1.png)

Note:
Due to last minute problems with the AWS RDS instance, only the test database (sqllite3) is running in production. It contains only the data of % trucks and their respective Schedules as listed in section **Entity relationship** model of this README. Please see the section on **Issues**.

# Development:
**backend**
It consisted of using the ORM provided by squalize to build the Truck and Schedule models which have a one-to-many relationship. These models are located in the models folder. With this and the first 5 data in the test database (sqlite3) that are loaded with the script load-truck-data.js and load-schedule-data.js I could start building the graphql API in the graphql_api folder where you can find the schema.js, the resolvers.js and of course the index.js file which is run by an Apollo server that finally serves the data through graphql.

**front**
In this part I made use of the UI material style components with which I achieved a friendly and beautiful user interface at the same time. The map is rendered in a component called Map in the file Mapsection.js in this component the magic happens, the map is rendered with the points obtained by the query made by Apollo client to the api of graphql. in addition it communicates with the component of ato completed with which a food can be selected, that selection listens to the components children and finally it is rendered in the map only the truck where the selected food is sold.

# Issues
1. Due to a last minute problem with the RDS instance in AWS, in production is running the test database (Sqlite3), that's why in the Map are shown only 5 points that are the data that were stored in the development stage to make the respective tests. However, the Application does its corresponding work, consults the api, renders those data in the map and also uses them to auto complete and render again the selection of this field.

