import Sequelize from 'sequelize';

import User from '../app/models/User';
import Promocoes from '../app/models/Promocoes';
import File from '../app/models/File';

import dataBaseConfig from '../config/database';

const models = [User, File, Promocoes];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(dataBaseConfig);

		models
			.map(model => model.init(this.connection))
			.map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
