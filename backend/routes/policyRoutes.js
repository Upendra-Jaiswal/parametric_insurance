const express = require("express");
const {
  createPolicy,
  getPolicies,
  triggerPayout,
} = require("../controllers/policyController");

const router = express.Router();

router.post("/", createPolicy);
router.get("/", getPolicies);
router.post("/:policyId/payout", triggerPayout);

module.exports = router;
