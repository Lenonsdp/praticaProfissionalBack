module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('promocoes', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			descricao: {
				type: Sequelize.STRING,
				allowNull: false
			},
			preco: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			url_original: {
				type: Sequelize.STRING,
				allowNull: false,
			},
     	 url_monetizada: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			loja: {
				type: Sequelize.STRING,
				allowNull: false
			},
    		  imagem: {
				type: Sequelize.STRING,
				allowNull: false
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('promocoes');
	}
};