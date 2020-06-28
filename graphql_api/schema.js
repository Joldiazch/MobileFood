const { gql } = require('apollo-server')

const typeDefs = gql`
    type Truck {
        id: Int!
        applicant: String!
        fooditems: String!
        cnn: String!
        address: String!
        latitude: String!
        longitude: String!
        schedule: [Schedule]
      }

    type Schedule {
        id: Int!
        locationdesc: String!,
        start24: String!,
        end24: String!,
        dayofweekstr: String!,
        optionaltext: String!
        truck: Truck
    }

    type Query {
        truck(id: Int!): Truck!
        allTruck: [Truck!]!
        schedule(id: Int!): Schedule!
        allSchedule: [Schedule!]!
    }
`

module.exports = typeDefs