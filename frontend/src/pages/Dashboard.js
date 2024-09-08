import React, { useEffect, useState } from "react";
import { getPoliciesFromBackend } from "../services/insuranceService";
import PolicyForm from "../components/PolicyForm";

const Dashboard = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      const data = await getPoliciesFromBackend();
      setPolicies(data);
    };
    fetchPolicies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Insurance Dashboard
      </h1>
      <div className="max-w-4xl mx-auto">
        <PolicyForm />
        <h2 className="text-3xl font-bold mt-8 mb-4">Active Policies</h2>
        <ul className="bg-white p-6 rounded-lg shadow-md">
          {policies.map((policy) => (
            <li key={policy._id} className="border-b border-gray-200 py-4">
              <div className="flex justify-between">
                <span>
                  {policy.policyName} - {policy.disasterType}
                </span>
                <span
                  className={`font-bold ${
                    policy.payoutTriggered ? "text-red-500" : "text-green-500"
                  }`}
                >
                  Payout Triggered: {policy.payoutTriggered ? "Yes" : "No"}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Coverage Amount: {policy.coverageAmount}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
