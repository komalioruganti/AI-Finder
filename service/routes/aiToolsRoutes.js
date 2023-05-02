const express = require("express");
const { getAllAITools, getAiToolById } = require("../controllers/aiTools");
const router = express.Router();

router.get("/getAllAiTools", getAllAITools);
router.get("/getAiToolById/:slug", getAiToolById);

module.exports = router;
