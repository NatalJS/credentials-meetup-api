const { migrationActions } = require('fastexpress');

module.exports = {
  up: migrationActions.createTable('Registrations', Sequelize => ({
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    appear: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  })),
  down: migrationActions.dropTable('Registrations'),
};
