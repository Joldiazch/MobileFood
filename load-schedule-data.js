const models = require('./models');

var schedule = require('./json_data/MobileFoodSchedule.json');

const trucks = models.Truck.findAll()

trucks.then(obj => {
    obj.map(truck =>{
        //console.log(truck.dataValues);
        const truckId = truck.dataValues.id;
        schedule.map(sch => {
            const {locationdesc, start24, end24, dayofweekstr, optionaltext, cnn} = sch;
            if (cnn === truck.dataValues.cnn){
                models.Schedule.create({
                    truckId,
                    locationdesc,
                    start24,
                    end24,
                    dayofweekstr,
                    optionaltext,
                });
            }

        })
    });
})


