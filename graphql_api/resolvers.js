const resolvers = {
    Query: {
        async truck (root, { id }, { models }) {
            return models.Truck.findByPk(id)
        },
        async allTruck (root, args, { models }) {
              return models.Truck.findAll()
        },
        async schedule (root, { id }, { models }) {
            console.log(id)
            return models.Schedule.findByPk(id)
        },
        async allSchedule (root, args, { models }) {
            return models.Schedule.findAll()
        },
    },
    Truck: {
        async schedule (truck) {
            return truck.getSchedules()
        }
    },
    Schedule: {
        async truck (schedule) {
            return schedule.getTruck()
        }
    }
}

module.exports = resolvers