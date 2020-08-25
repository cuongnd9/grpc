const express = require('express');
const grpcRoute = require('./grpcRoute');

const router = express.Router();

router.get('/', grpcRoute.listCats);
router.get('/:id', grpcRoute.readCat);
router.post('/', grpcRoute.createCat);
router.put('/:id', grpcRoute.updateCat);
router.delete('/:id', grpcRoute.deleteCat);

module.exports = router;
