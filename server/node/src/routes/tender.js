// Author: Dheemanth Rajendra Prasad Kumawat
const express = require("express");
const { check, validationResult } = require("express-validator");
const tenderController = require("../controller/tender");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/alltender", tenderController.getAllTenders);
router.get("/:id", tenderController.getTenderById);
router.post(
  "/createbid",
  [
    check("tenderId", "Tender id is required.").not().isEmpty(),
    check("bidAmount", "Bid amount is required.").not().isEmpty(),
    check("bidderId", "Bidder id is required.").not().isEmpty(),
  ],
  tenderController.createBid
);

module.exports = router;
