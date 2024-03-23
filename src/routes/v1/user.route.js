const express = require("express");

const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
// const auth = require('../../middlewares/auth');
const router = express.Router();


router.get('/:userId', 
    validate(userValidation.getUser), userController.getUser);

router.put(
  "/:userId",

  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;