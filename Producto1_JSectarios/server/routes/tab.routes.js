const express = require('express');
const router = express.Router();
const {showTablones, deleteTab, addTab} = require('../../src/controllers/tab_controllers')

router.get('/getAllTablones', showTablones);
router.delete('/deleteOneTablon/:_id', deleteTab);
router.post('/addTablon', addTab);

module.exports = router;