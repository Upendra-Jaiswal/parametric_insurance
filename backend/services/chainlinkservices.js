const axios = require('axios');

// Example function to fetch disaster data (e.g., earthquake data)
exports.fetchDisasterData = async () => {
    const response = await axios.get('YOUR_CHAINLINK_ENDPOINT');
    return response.data;
};
