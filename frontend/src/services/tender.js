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

// Function to delete a tender
export const deleteTender = async (tenderId) => {
  try {
    await axios.delete(`${API_BASE_URL}/tenders/${tenderId}`);
  } catch (error) {
    console.error('Error deleting tender:', error);
    throw error;
  }
};

// Function to update a tender
export const updateTender = async (tenderId, tenderData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/tenders/${tenderId}`, tenderData);
    return response.data;
  } catch (error) {
    console.error('Error updating tender:', error);
    throw error;
  }
};

// Function to update a document
export const updateDocument = async (documentId, file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.put(`${API_BASE_URL}/documents/${documentId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};
