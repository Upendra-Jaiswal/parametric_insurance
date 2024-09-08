import React, { useState } from "react";
import { createPolicyInBackend } from "../services/insuranceService";

const PolicyForm = () => {
  const [formData, setFormData] = useState({
    policyName: "",
    coverageAmount: 0,
    disasterType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPolicyInBackend(formData);
      alert("Policy created successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to create policy");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Create a New Policy</h2>
      <div className="mb-4">
        <input
          type="text"
          name="policyName"
          placeholder="Policy Name"
          value={formData.policyName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="coverageAmount"
          placeholder="Coverage Amount"
          value={formData.coverageAmount}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="disasterType"
          placeholder="Disaster Type"
          value={formData.disasterType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Create Policy
      </button>
    </form>
  );
};

export default PolicyForm;
