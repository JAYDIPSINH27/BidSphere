// Author: Vraj Sunilkumar Shah

/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import { uploadDocuments, deleteDocument, updateDocument, getDocumentById } from "../../../services/tender";

const TenderDocumentManagement = ({ tender, userId, tenderChanged, setTenderChanged}) => {
  const [documents, setDocuments] = useState([]);
  const [files, setFiles] = useState([]);
  const [editFile, setEditFile] = useState(null);
  const [editDocumentId, setEditDocumentId] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openUploadDialog, setOpenUploadDialog] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const fetchedDocuments = await Promise.all(
          tender.documents.map(async (docId) => {
            const doc = await getDocumentById(docId);
            return doc;
          })
        );
        setDocuments(fetchedDocuments);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, [tender.documents]);

  const handleUpload = async () => {
    try {
      await uploadDocuments(files, userId, tender.id)
      setTenderChanged(!tenderChanged);
      setFiles([]);
      setOpenUploadDialog(false);
      const fetchedDocuments = await Promise.all(
        tender.documents.map(async (docId) => {
          const doc = await getDocumentById(docId);
          return doc;
        })
      );
      setDocuments(fetchedDocuments);
    } catch (error) {
      console.error("Error uploading documents:", error);
    }
  };

  const handleDelete = async (documentId) => {
    try {
      await deleteDocument(documentId);
      setDocuments(documents.filter(doc => doc.id !== documentId));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleEdit = (documentId) => {
    setEditDocumentId(documentId);
    setOpenEditDialog(true);
  };

  const handleEditFileChange = (event) => {
    setEditFile(event.target.files[0]);
  };

  const handleEditSubmit = async () => {
    try {
      if (editFile && editDocumentId) {
        await updateDocument(editDocumentId, editFile);
        setEditFile(null);
        setEditDocumentId(null);
        setOpenEditDialog(false);
        const updatedDocuments = await Promise.all(
          tender.documents.map(async (docId) => {
            const doc = await getDocumentById(docId);
            return doc;
          })
        );
        setDocuments(updatedDocuments);
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  return (
    <Box sx={{ backgroundColor: '#F1FAEE', padding: '1rem', borderRadius: '8px' }}>
      <Typography variant="h6" sx={{ color: '#1D3557' }}>Document Management</Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#457B9D', color: '#F1FAEE', margin: '1rem' }}
        onClick={() => setOpenUploadDialog(true)}
      >
        Document Addendum
      </Button>
      <Grid container spacing={2} className="mt-4">
        {documents.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc.id}>
            <Paper className="p-4 flex justify-between items-center" sx={{ backgroundColor: '#A8DADC' }}>
              <Typography sx={{ color: '#1D3557' }}>{doc.url.split('/').pop()}</Typography>
              <Box>
                <IconButton onClick={() => handleEdit(doc.id)} sx={{ color: '#1D3557' }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(doc.id)} sx={{ color: '#E63946' }}>
                  <DeleteIcon />
                </IconButton>
                <IconButton component="a" href={doc.url} target="_blank" download sx={{ color: '#1D3557' }}>
                  <DownloadIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openUploadDialog} onClose={() => setOpenUploadDialog(false)}>
        <DialogTitle>Upload Documents</DialogTitle>
        <DialogContent>
          <input type="file" multiple onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUploadDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpload} color="primary" variant="contained">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Document</DialogTitle>
        <DialogContent>
          <input type="file" onChange={handleEditFileChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TenderDocumentManagement;
