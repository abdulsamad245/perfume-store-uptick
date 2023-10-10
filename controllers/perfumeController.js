const Perfume = require('../models/Perfume');
const {Op } = require('sequelize');

exports.addPerfume = async (req, res) => {

  try {
    const { name, category, color, price, rating } = req.body;
    
    const newPerfume = await Perfume.create({
      name,
      category,
      color,
      price,
      rating,
    });

    return res.status(201).json({ message: 'Perfume added successfully', perfume: newPerfume });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.editPerfume = async (req, res) => {
  const { id } = req.params;
  const { name, category, color, price, rating } = req.body;

  try {
    const perfume = await Perfume.findByPk(id);

    if (!perfume) {
      return res.status(404).json({ message: 'Perfume not found' });
    }

    perfume.name = name;
    perfume.category = category;
    perfume.color = color;
    perfume.price = price;
    perfume.rating = rating;

    await perfume.save();

    return res.status(200).json({ message: 'Perfume updated successfully', perfume });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deletePerfume = async (req, res) => {
  const { id } = req.params;

  try {
    const perfume = await Perfume.findByPk(id);

    if (!perfume) {
      return res.status(404).json({ message: 'Perfume not found' });
    }

    await perfume.destroy();

    return res.status(200).json({ message: 'Perfume deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPerfumeById = async (req, res) => {
  const { id } = req.params;

  try {
    const perfume = await Perfume.findByPk(id);

    if (!perfume) {
      return res.status(404).json({ message: 'Perfume not found' });
    }

    return res.status(200).json({ perfume });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPerfumesByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const perfumes = await Perfume.findAll({ where: { category } });
    if (!perfumes) {
        return res.status(404).json({ message: 'Perfumes not found' });
      }

    return res.status(200).json({ perfumes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPerfumesByColor = async (req, res) => {
  const { color } = req.params;

  try {
    const perfumes = await Perfume.findAll({ where: { color } });
    if (!perfumes) {
        return res.status(404).json({ message: 'Perfumes not found' });
      }

    return res.status(200).json({ perfumes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPerfumesByPriceRange = async (req, res) => {
  const { minPrice, maxPrice } = req.query;

  try {
    const perfumes = await Perfume.findAll({
      where: {
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      },
    });
    if (!perfumes) {
        return res.status(404).json({ message: 'Perfumes not found' });
      }

    return res.status(200).json({ perfumes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPerfumesByRating = async (req, res) => {
  const { rating } = req.params;

  try {
    const perfumes = await Perfume.findAll({ where: { rating } });
    if (!perfumes) {
        return res.status(404).json({ message: 'Perfumes not found' });
      }

    return res.status(200).json({ perfumes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getAllPerfumes = async (req, res) => {
  try {
    const perfumes = await Perfume.findAll();
    if (!perfumes) {
        return res.status(404).json({ message: 'Perfumes not found' });
      }
    return res.status(200).json({ perfumes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
