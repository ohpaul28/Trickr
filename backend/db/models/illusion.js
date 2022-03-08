'use strict';
module.exports = (sequelize, DataTypes) => {
  const Illusion = sequelize.define('Illusion', {
    userId: DataTypes.INTEGER,
    illusionURL: DataTypes.STRING,
    title: DataTypes.STRING(20),
    description: DataTypes.TEXT
  }, {});
  Illusion.associate = function(models) {
    // associations can be defined here
    Illusion.belongsTo(models.User, { foreignKey: 'userId' });
    Illusion.hasMany(models.Comment, {foreignKey: 'illusionId'});
  };
  return Illusion;
};
