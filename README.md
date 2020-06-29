# MobileFood! Coding Challenge - Chiper

The development of this web application consisted of Designing and implementing a platform that would allow people to know what types of food trucks can be found near a specific location on a map.
The data was taken from [DataSF](http://www.datasf.org/) : [Food Trucks](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat). This allows anyone in the S.F. area to know which are the nearest food trucks, what are their working hours, and what kind of meals could be consumed in each one.

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
![enter image description here](https://i.ibb.co/KbJk17x/Mobile-FOOD.png)

## Architecture
![enter image description here](https://i.ibb.co/b3z8Cs5/Blank-Diagram-1.png)

### Only a small data is shown.
As it is shown in the file load-truck-data.js for this sample 5 data were loaded since at the moment sqllite3 is used only although in a beginning it was planned to use RDS and postgresql. these data are rendered in the map and can be.

