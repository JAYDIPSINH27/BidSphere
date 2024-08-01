/* eslint-disable */    
import axios from 'axios';

export async function getAllTenders() {
    return axios.get('https://bidsphere-node.onrender.com/tender/alltender');
}

export async function bid(tenderId, bidderId, bidAmount) {
    return axios.post('https://bidsphere-node.onrender.com/tender/createbid', {
        tenderId,
        bidderId,
        bidAmount,
    });
}
