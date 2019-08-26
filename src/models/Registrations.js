module.exports = (sequelize, DataTypes) => {
  const Registrations = sequelize.define(
    'Registrations',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      appear: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {},
  );
  Registrations.associate = () => {};
  return Registrations;
};
