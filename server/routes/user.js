const CryptoJS = require('crypto-js');
const User = require('../models/User');
const router = require('express').Router();
const {
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('./verifyToken');

// UPDATE
router.put(
	'/update/:id',
	verifyTokenAndAuthorization,
	async (req, res) => {
		if (req.body.password) {
			req.body.password = CryptoJS.AES.encrypt(
				req.body.password,
				process.env.PASS_SEC
			).toString();
		}

		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	}
);

// DELETE
router.delete(
	'/delete/:id',
	verifyTokenAndAuthorization,
	async (req, res) => {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json('User has been deleted');
		} catch (error) {
			res.status(500).json(error);
		}
	}
);

// GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		const { password, ...safe_user } = user._doc;

		res.status(200).json(safe_user);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET ALL USERS
router.get('/all', verifyTokenAndAdmin, async (req, res) => {
	try {
		const query = req.query.new;
		const users = query
			? await User.find().sort({ createdAt: -1 }).limit(5)
			: await User.find();

		const safe_users = users.map((user) => {
			const { password, ...safe_user } = user._doc;
			return safe_user;
		});

		res.status(200).json(safe_users);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{
				$project: {
					month: { $month: '$createdAt' },
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
