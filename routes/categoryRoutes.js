const express = require("express");
const { body } = require("express-validator");
const { categoryController } = require("../controllers/categoryController");
const { categoryValidate } = require("../middleware/categoryValidate");
const categoryRoutes = express.Router();

categoryRoutes.get("/", categoryController.getAll);
categoryRoutes.get("/:id", categoryController.getById);
categoryRoutes.post(
  "/",
  body("name")
    .isLength({ min: 3 })
    .withMessage("min 3 character")
    .notEmpty()
    .withMessage("Must FIll"),
  body("publishDate")
    .isLength({ min: 3 })
    .withMessage("min 3 char")
    .notEmpty()
    .withMessage("Must FIll"),
  body("year").notEmpty().withMessage("Must FIll"),
  body("description").notEmpty().withMessage("Must FIll"),

  categoryValidate,
  categoryController.add
);
categoryRoutes.delete("/:id", categoryController.deleteById);
categoryRoutes.put("/:id", categoryController.update);

module.exports = {
  categoryRoutes,
};
