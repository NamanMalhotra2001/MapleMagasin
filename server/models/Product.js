const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		desc: { type: String, required: true },
		img: {
			type: String,
			default:
				'https://cdn-icons.flaticon.com/png/512/1867/premium/1867823.png?token=exp=1641645901~hmac=1857cfa5a1a7904488718198d90cb60a',
		},
		categories: { type: Array },
		size: { type: Array },
		color: { type: Array },
		price: { type: Number, required: true },
		inStock: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
