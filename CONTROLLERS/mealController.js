const Meal = require('../MODELS/mealModel');

const addMeal = async (req, res) => {
  try {
    const { mealType, calories } = req.body;
    const meal = new Meal({ userId: req.user.id, mealType, calories });

    await meal.save();
    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json({ message: 'Error adding meal', error });
  }
};

const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ userId: req.user.id });
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meals', error });
  }
};

module.exports = { addMeal, getMeals };
