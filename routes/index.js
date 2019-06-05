//use this to collect All routes(api and HTML) and package them
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build"));
});

module.exports = router;