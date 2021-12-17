import Sequelize, { Model } from 'sequelize';
import User from '../models/User';
class Promocoes extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},
				descricao: {
					type: Sequelize.STRING,
				},
				url_original: {
					type: Sequelize.STRING,
				},
				url_monetizada: {
					type: Sequelize.STRING,
				},
				preco: {
					type: Sequelize.STRING,
				},
				loja: {
					type: Sequelize.STRING,
				},
				id_user: {
					type: Sequelize.INTEGER,
					references: {
						model: User,
						key: 'id'
					},					
				}
			},
			{
				sequelize
			}
		);
		return this;
	}

	  // Associação cardinalidade
	  static associate(models) {
		this.belongsTo(models.File, { foreignKey: 'id', as: 'id_imagem' });
	  }
}

export default Promocoes;
