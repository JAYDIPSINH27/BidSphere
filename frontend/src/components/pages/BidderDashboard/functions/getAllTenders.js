/* eslint-disable */    
//Author: Dheemanth Rajendra Prasad Kumawat
import axios from 'axios';

export async function getAllTenders() {
    return axios.get('http://localhost:5001/tender/alltender');
}

export async function bid(tenderId, bidderId, bidAmount) {
    return axios.post('http://localhost:5001/tender/createbid', {
        tenderId,
        bidderId,
        bidAmount,
    });
}
