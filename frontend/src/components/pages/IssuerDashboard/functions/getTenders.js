/* Author: Ashish Bhasin */
import axios from 'axios';

const baseUrl = import.meta.env.VITE_Spring_BACKEND_URL;

export async function getTenders() {
  const issuerId = 'issuer123';
  return axios.get(`${baseUrl}/api/issuer/tenders?issuerId=${issuerId}`);
}
