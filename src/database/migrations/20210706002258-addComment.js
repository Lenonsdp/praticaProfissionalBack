'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'promocoes',
        'first_comment',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'promocoes',
        'visible_comment',
        {
          type: Sequelize.BOOLEAN
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('promocoes', 'first_comment'),
      queryInterface.removeColumn('promocoes', 'visible_comment')
    ]);
  }
};