import { apiRequest } from "./apiDefaults.js";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

// Get documents by logged-in user (Manager/Reviewer)
export const fetchDocuments = async () => {
  const url = `${baseUrl}/documents`;
  return apiRequest(url, undefined, undefined, true);
};

// Function to handle uploading a document
export const uploadDocument = async (data) => {
  const url = `${baseUrl}/documents`;
  return apiRequest(url, "POST", data, true, false);
};

// Function to handle search
export const handleSearch = async (query) => {
  const url = `${baseUrl}/documents/tracking/${encodeURIComponent(
    query.toUpperCase()
  )}`;
  return apiRequest(url, "GET", undefined, true);
};

// Function to handle search of requestor
export const requestorSearch = async (query) => {
  const url = `${baseUrl}/documents/search/${encodeURIComponent(
    query.toUpperCase()
  )}`;
  return apiRequest(url, "GET", undefined);
};

// Function to handle editing a document
export const handleEditDocument = async (id, data) => {
  const url = `${baseUrl}/documents/${id}`;
  return apiRequest(url, "PATCH", data, true, false);
};

// Function to handle document deletion
export const deleteDocument = async () => {
  const url = `${baseUrl}/documents`;
  return apiRequest(url, "DELETE", undefined, true);
};

export const getDocumentHistoryLog = async (id, params) => {
  const url = `${baseUrl}/documents/${id}/history`;

  // Convert params to query string
  const queryString = new URLSearchParams(params).toString();

  // Append query string to URL if it exists
  const finalUrl = queryString ? `${url}?${queryString}` : url;

  return apiRequest(finalUrl, "GET", undefined, true);
};
