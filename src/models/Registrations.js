module.exports = (sequelize, DataTypes) => {
  const Registrations = sequelize.define(
    'Registrations',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isLowercase: true,
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
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
