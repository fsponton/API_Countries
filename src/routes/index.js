const { Router } = require('express');
const activities = require('./activitiesRouter');
const countries = require('./countriesRouter')

const router = Router();

router.use('/countries', countries);
router.use('/activities', activities);

module.exports = router;
