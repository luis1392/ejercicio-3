// Inicializando el express router
let router = require("express").Router();

// Import controller
var calculate = require("../controllers/calculator/CalculatorController");

// All routes
router.route("/result").get(calculate.value);
router.route("/result").post(calculate.save);

// Export API routes
module.exports = router;
