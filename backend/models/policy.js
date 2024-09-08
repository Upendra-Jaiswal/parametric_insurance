const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policyName: String,
    coverageAmount: Number,
    disasterType: String,
    policyHolder: String,
    payoutTriggered: { type: Boolean, default: false }
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
