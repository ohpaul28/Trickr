'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('Photos', {
    userId: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    title: DataTypes.STRING(20),
    description: DataTypes.STRING(255)
  }, {});
  Photos.associate = function(models) {
    // associations can be defined here
  };
  return Photos;
};
