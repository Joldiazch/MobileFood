'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Truck, { foreignKey: 'truckId' })
    }
  };
  Schedule.init({
    locationdesc: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    start24: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    end24: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    dayofweekstr: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    optionaltext: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};