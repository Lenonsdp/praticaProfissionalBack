import * as Yup from 'yup';
import Promocoes from '../models/Promocoes';
import  moment from 'moment';

const { Op } = require('sequelize')
class PromocoesController {
	async store(req, res) {
		for (const iterator of req.body) {
			const schema = Yup.object().shape({
				descricao: Yup.string().required(),
				url_original: Yup.string().required(),
				url_monetizada: Yup.string().required(),
				loja: Yup.string().required(),
				imagem: Yup.string().required(),
				preco: Yup.string().required()
			});
	
			if (!(await schema.isValid(iterator))) {
				continue;
			}
			iterator.id_user = req.userId;
			await Promocoes.create(iterator, { 'id_user': req.userId });
		}

		return res.status(201).json({ sucess: 'Uhuuuul.' });;
	}

	async index(req, res) {
		const { page } = req.query;
		const promocoes = await Promocoes.findAll({
			order: [
				['id', 'DESC']
			],
			attributes: ['id', 'descricao', 'url_original', 'url_monetizada', 'loja', 'imagem', 'preco', 'created_at', 'visible_comment', 'visible_comment', 'first_comment'],
			limit: 9,
			offset: (page -1) * 9
		});

		return res.json(promocoes);
	}

	async indexTitles(req, res) {
		const promocoes = await Promocoes.findAll({
			order: [
				['id', 'DESC']
			],
			attributes: ['descricao'],
			limit: 60,
			where: {
				created_at: {
					[Op.gte]: moment().subtract(2, 'days').toDate()
				}
			}
		});

		return res.json(promocoes);
	}

	async show(req, res) {
		const { page = 1, search } = req.query;
		const promocoes = await Promocoes.findAll({
			order: [
				['id', 'DESC']
			],
			attributes: ['id', 'descricao', 'url_original', 'url_monetizada', 'loja', 'imagem', 'preco', 'created_at'],
			where: {
				descricao: {
					[Op.iLike]: `%${search}%`
				} 
			},
			limit: 9,
			offset: (page - 1) * 9
		});
		return res.json(promocoes);
	}

	async delete(req, res) {
		const promocao = await Promocoes.findOne(
			{
				where: {
					id: req.params.id,
					id_user: req.userId
				}
			}
		);
		if (promocao) {
			await promocao.destroy({
				where: {
					id: req.params.id
				}
			});

			return res.status(204).json({ msg: 'No Content.' });
		} else {
			return res.status(404).json({ error: 'Promotion not found.' });
		}
	}
}

export default new PromocoesController();
