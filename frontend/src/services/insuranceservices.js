// import axios from "axios";

// // Replace with your backend API URL
// const API_URL = "http://localhost:5000/api/policies";

// export const createPolicyInBackend = async (policyData) => {
//   try {
//     const response = await axios.post(`${API_URL}/create`, policyData);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating policy:", error);
//     throw error;
//   }
// };

// export const getPoliciesFromBackend = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching policies:", error);
//     throw error;
//   }
// };

// export const triggerPayout = async (policyId) => {
//   try {
//     const response = await axios.post(`${API_URL}/${policyId}/trigger-payout`);
//     return response.data;
//   } catch (error) {
//     console.error("Error triggering payout:", error);
//     throw error;
//   }
// };
