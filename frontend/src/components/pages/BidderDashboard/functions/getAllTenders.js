/* eslint-disable */    
import axios from 'axios';

export async function getAllTenders() {
    return axios.get('https://bidsphere-node.onrender.com');
}

export async function bid(tenderId, bidderId, bidAmount) {
    return axios.post('https://bidsphere-node.onrender.com', {
        tenderId,
        bidderId,
        bidAmount,
    });
}
