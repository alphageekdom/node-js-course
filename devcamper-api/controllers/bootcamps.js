const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, msg: 'Show all bootcamps', data: bootcamps });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
};

// @desc    Get a single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      msg: `Show bootcamp ${bootcamp.id}`,
      data: bootcamp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: 'Something went wrong' });
  }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = new Bootcamp(req.body);
  try {
    const savedBootcamp = await bootcamp.save();
    res.status(201).json({
      success: 'true',
      data: savedBootcamp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: 'Something went wrong' });
  }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // Bootcamp doesn't exist
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      msg: `Update bootcamp ${bootcamp.id}`,
      data: bootcamp,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
};

// @desc    Delete bootcamp
// @route   Delete /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, msg: 'Bootcamp DOES NOT exist' });
    }

    res
      .status(200)
      .json({ success: true, msg: `Delete bootcamp ${bootcamp.id}`, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
};
