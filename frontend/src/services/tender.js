/* eslint-disable */
// Author: Jaydipsinh Padhiyars
import axios from 'axios';

const API_BASE_URL = `${import.meta.env.VITE_Spring_BACKEND_URL}/api`;

// Function to create a new tender
export const createTender = async (tenderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tenders`, tenderData);
    return response.data;
  } catch (error) {
    console.error('Error creating tender:', error);
    throw error;
  }
};

// Function to upload documents
export const uploadDocuments = async (files, userId, tenderId) => {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });
    formData.append('userId', userId);
    formData.append('tenderId', tenderId);
    formData.append('type', 'document');
  
    try {
      await axios.post(`${API_BASE_URL}/documents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error('Failed to upload documents:', error);
      throw error;
    }
  };
