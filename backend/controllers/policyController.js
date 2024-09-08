const Policy = require('../models/Policy');

exports.createPolicy = async (req, res) => {
    try {
        const { policyName, coverageAmount, disasterType, policyHolder } = req.body;
        const newPolicy = new Policy({ policyName, coverageAmount, disasterType, policyHolder });
        await newPolicy.save();
        res.status(201).json(newPolicy);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create policy' });
    }
};

exports.getPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch policies' });
    }
};

exports.triggerPayout = async (req, res) => {
    try {
        const { policyId } = req.params;
        const policy = await Policy.findById(policyId);
        if (policy) {
            policy.payoutTriggered = true;
            await policy.save();
            res.status(200).json(policy);
        } else {
            res.status(404).json({ error: 'Policy not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to trigger payout' });
    }
};
