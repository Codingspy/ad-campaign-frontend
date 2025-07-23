import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://adcampaignmvp-ayhtbcdxghfke7cd.canadacentral-01.azurewebsites.net', 
});

export default instance;
