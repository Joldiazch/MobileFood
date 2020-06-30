const models = require('./models');

var trucks = require('./json_data/MobileFoodFacilityPermit.json');
// var schedule = require('./json_data/MobileFoodSchedule.json');

trucks.slice(1, 100).map( truck => {
    const {applicant, fooditems, cnn, address, latitude, longitude, status} = truck
    if (fooditems && status === 'APPROVED'){
        //console.log({applicant, fooditems, cnn, address, latitude, longitude,});
        models.Truck.create({
            applicant,
            fooditems,
            cnn,
            address,
            latitude,
            longitude,
        });
    }
});