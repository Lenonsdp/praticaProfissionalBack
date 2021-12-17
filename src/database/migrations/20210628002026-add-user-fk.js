'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	return queryInterface.addColumn('promocoes', 'id_user', {
		type: Sequelize.INTEGER,
		references: { model: 'users', key: 'id' },
		onUpdate: 'SET NULL',
		onDelete: 'SET NULL',
		allowNull: true
	  });
  },

  down: async (queryInterface, Sequelize) => {
	return queryInterface.removeColumn(
		'promocoes',
		'id_user'
	  );
  }
};
