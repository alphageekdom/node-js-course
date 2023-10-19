const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json({ success: true, msg: 'Show all bootcamps' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.json({ success: true, msg: `Show bootcamp ${req.params.id}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.post('/', async (req, res) => {
  try {
    res.json({ success: true, msg: 'Create new bootcamp' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.json({ success: true, msg: `Update bootcamp ${req.params.id}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

module.exports = router;
