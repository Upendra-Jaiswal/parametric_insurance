// import React, { useState } from "react";
// import Toast from "./Toast";

// const PolicyForm = ({ onAddPolicy }) => {
//   const [policyName, setPolicyName] = useState("");
//   const [disasterType, setDisasterType] = useState("");
//   const [coverageAmount, setCoverageAmount] = useState("");
//   const [showToast, setShowToast] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Show toast notification
//     setShowToast(true);

//     // Hide toast after 10 seconds
//     setTimeout(() => setShowToast(false), 10000);

//     // Clear form fields
//     setPolicyName("");
//     setDisasterType("");
//     setCoverageAmount("");
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//       <h2 className="text-2xl font-bold mb-4">Add New Policy</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="policyName">
//             Policy Name
//           </label>
//           <input
//             type="text"
//             id="policyName"
//             value={policyName}
//             onChange={(e) => setPolicyName(e.target.value)}
//             className="w-full border-gray-300 border rounded-lg px-3 py-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="disasterType">
//             Disaster Type
//           </label>
//           <input
//             type="text"
//             id="disasterType"
//             value={disasterType}
//             onChange={(e) => setDisasterType(e.target.value)}
//             className="w-full border-gray-300 border rounded-lg px-3 py-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverageAmount">
//             Coverage Amount
//           </label>
//           <input
//             type="text"
//             id="coverageAmount"
//             value={coverageAmount}
//             onChange={(e) => setCoverageAmount(e.target.value)}
//             className="w-full border-gray-300 border rounded-lg px-3 py-2"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Add Policy
//         </button>
//       </form>

//       {/* Toast Notification */}
//       {showToast && <Toast message="Adding new policy..." onClose={() => setShowToast(false)} />}
//     </div>
//   );
// };

// export default PolicyForm;
import React, { useState } from "react";
import Toast from "./Toast";

const generateRandomPolicy = () => {
  const policyNames = [
    "Fire Coverage",
    "Flood Coverage",
    "Earthquake Coverage",
    "Hurricane Coverage",
  ];
  const disasterTypes = ["Fire", "Flood", "Earthquake", "Hurricane"];
  const randomPolicyName =
    policyNames[Math.floor(Math.random() * policyNames.length)];
  const randomDisasterType =
    disasterTypes[Math.floor(Math.random() * disasterTypes.length)];
  const randomCoverageAmount = `$${(Math.random() * 10000).toFixed(2)}`;

  return {
    policyName: randomPolicyName,
    disasterType: randomDisasterType,
    coverageAmount: randomCoverageAmount,
  };
};

const PolicyForm = ({ onAddPolicy }) => {
  const [policyName, setPolicyName] = useState("");
  const [disasterType, setDisasterType] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Show toast notification
    setShowToast(true);

    // Hide toast after 10 seconds
    setTimeout(() => setShowToast(false), 10000);

    // Clear form fields
    setPolicyName("");
    setDisasterType("");
    setCoverageAmount("");
  };

  const handleGenerateRandomPolicy = () => {
    const randomPolicy = generateRandomPolicy();
    setPolicyName(randomPolicy.policyName);
    setDisasterType(randomPolicy.disasterType);
    setCoverageAmount(randomPolicy.coverageAmount);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Add New Policy</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="policyName"
          >
            Policy Name
          </label>
          <input
            type="text"
            id="policyName"
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
            className="w-full border-gray-300 border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="disasterType"
          >
            Disaster Type
          </label>
          <input
            type="text"
            id="disasterType"
            value={disasterType}
            onChange={(e) => setDisasterType(e.target.value)}
            className="w-full border-gray-300 border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="coverageAmount"
          >
            Coverage Amount
          </label>
          <input
            type="text"
            id="coverageAmount"
            value={coverageAmount}
            onChange={(e) => setCoverageAmount(e.target.value)}
            className="w-full border-gray-300 border rounded-lg px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Policy
        </button>
        <button
          type="button"
          onClick={handleGenerateRandomPolicy}
          className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Generate Random Policy
        </button>
      </form>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="Adding new policy..."
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default PolicyForm;
