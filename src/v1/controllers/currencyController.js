const {
  getAllObjects,
  getObjectById,
  addObject,
  deleteObjectById,
  updateObjectById,
} = require('../data/databaseGeneric');

const getAllCurrency = async (req, res) => {
  try {
    const currencies = await getAllObjects();
    res.status(200).json({ success: true, data: currencies });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '404 Not Found. Please try again.',
    });
  }
};

const getSingleCurrency = async (req, res) => {
  try {
    const currency = await getObjectById(req.params.id);
    res.status(200).json({ success: true, data: currency });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '404 Not Found. Please try again.',
    });
  }
};

const createCurrency = async (req, res) => {
  try {
    const { name, value } = req.body;
    const newCurrency = await addObject({ name, value });
    res.status(201).json({ success: true, data: newCurrency });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '404 Not Found. Please try again.',
    });
  }
};

const updatedCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, value } = req.body;

    const updatedObject = await updateObjectById(id, { name, value });
    res.status(200).json({ success: true, data: updatedObject });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '404 Not Found. Please try again.',
    });
  }
};

const deleteCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteObjectById(id);
    res.status(200).json({ success: true, message: 'Currency deleted' });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '404 Not Found. Please try again.',
    });
  }
};

module.exports = {
  getAllCurrency,
  getSingleCurrency,
  createCurrency,
  updatedCurrency,
  deleteCurrency,
};
