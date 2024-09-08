// // import React, { useEffect, useState } from "react";
// // import { getPoliciesFromBackend } from "../services/insuranceService";
// // import PolicyForm from "../components/PolicyForm";

// // const Dashboard = () => {
// //   const [policies, setPolicies] = useState([]);

// //   useEffect(() => {
// //     const fetchPolicies = async () => {
// //       const data = await getPoliciesFromBackend();
// //       setPolicies(data);
// //     };
// //     fetchPolicies();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-10">
// //       <h1 className="text-4xl font-bold text-center mb-8">
// //         Insurance Dashboard
// //       </h1>
// //       <div className="max-w-4xl mx-auto">
// //         <PolicyForm />
// //         <h2 className="text-3xl font-bold mt-8 mb-4">Active Policies</h2>
// //         <ul className="bg-white p-6 rounded-lg shadow-md">
// //           {policies.map((policy) => (
// //             <li key={policy._id} className="border-b border-gray-200 py-4">
// //               <div className="flex justify-between">
// //                 <span>
// //                   {policy.policyName} - {policy.disasterType}
// //                 </span>
// //                 <span
// //                   className={`font-bold ${
// //                     policy.payoutTriggered ? "text-red-500" : "text-green-500"
// //                   }`}
// //                 >
// //                   Payout Triggered: {policy.payoutTriggered ? "Yes" : "No"}
// //                 </span>
// //               </div>
// //               <div className="text-sm text-gray-500">
// //                 Coverage Amount: {policy.coverageAmount}
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useEffect, useState } from "react";
// import PolicyForm from "../components/PolicyForm";

// const demoPolicies = [
//   {
//     _id: "1",
//     policyName: "Hurricane Protection",
//     disasterType: "Hurricane",
//     payoutTriggered: false,
//     coverageAmount: "100,000 USD",
//   },
//   {
//     _id: "2",
//     policyName: "Earthquake Coverage",
//     disasterType: "Earthquake",
//     payoutTriggered: true,
//     coverageAmount: "75,000 USD",
//   },
//   {
//     _id: "3",
//     policyName: "Flood Insurance",
//     disasterType: "Flood",
//     payoutTriggered: false,
//     coverageAmount: "50,000 USD",
//   },
// ];

// const Dashboard = () => {
//   const [policies, setPolicies] = useState([]);

//   useEffect(() => {
//     // Use demo data instead of fetching from backend
//     const fetchPolicies = () => {
//       setPolicies(demoPolicies);
//     };
//     fetchPolicies();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <h1 className="text-4xl font-bold text-center mb-8">
//         Insurance Dashboard
//       </h1>
//       <div className="max-w-4xl mx-auto">
//         <PolicyForm />
//         <h2 className="text-3xl font-bold mt-8 mb-4">Active Policies</h2>
//         <ul className="bg-white p-6 rounded-lg shadow-md">
//           {policies.map((policy) => (
//             <li key={policy._id} className="border-b border-gray-200 py-4">
//               <div className="flex justify-between">
//                 <span>
//                   {policy.policyName} - {policy.disasterType}
//                 </span>
//                 <span
//                   className={`font-bold ${
//                     policy.payoutTriggered ? "text-red-500" : "text-green-500"
//                   }`}
//                 >
//                   Payout Triggered: {policy.payoutTriggered ? "Yes" : "No"}
//                 </span>
//               </div>
//               <div className="text-sm text-gray-500">
//                 Coverage Amount: {policy.coverageAmount}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import PolicyForm from "../components/PolicyForm";
import { ToastContainer } from "react-toastify";

const demoPolicies = [
  {
    _id: "1",
    policyName: "Hurricane Protection",
    disasterType: "Hurricane",
    payoutTriggered: false,
    coverageAmount: "100,000 USD",
  },
  {
    _id: "2",
    policyName: "Earthquake Coverage",
    disasterType: "Earthquake",
    payoutTriggered: true,
    coverageAmount: "75,000 USD",
  },
  {
    _id: "3",
    policyName: "Flood Insurance",
    disasterType: "Flood",
    payoutTriggered: false,
    coverageAmount: "50,000 USD",
  },
  {
    _id: "4",
    policyName: "Tornado Safeguard",
    disasterType: "Tornado",
    payoutTriggered: false,
    coverageAmount: "40,000 USD",
  },
];

const Dashboard = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // Use demo data instead of fetching from backend
    const fetchPolicies = () => {
      setPolicies(demoPolicies);
    };
    fetchPolicies();
  }, []);

  const handleAddPolicy = (newPolicy) => {
    setPolicies((prevPolicies) => [...prevPolicies, newPolicy]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Insurance Dashboard
      </h1>
      <div className="max-w-4xl mx-auto">
        <PolicyForm onAddPolicy={handleAddPolicy} />
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
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
