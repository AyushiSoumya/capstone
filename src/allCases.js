import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTableContainer = styled(TableContainer)({
  marginTop: '50px',
});

const DeleteButton = styled(Button)({
  backgroundColor: '#FF3D00',
  color: '#FFFFFF',
});

const ArchivedCasesButton = styled(Button)({
  marginLeft: '1200px',
  marginRight:'50px',// Add some spacing to the left
  backgroundColor: '#4CAF50', // Green color for Archived Cases button
  color: '#FFFFFF',
});

const AllCases = () => {
  const [allCases, setAllCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCases = async () => {
      try {
        const response = await axios.get('http://localhost:8080/v1/legalcases');
        setAllCases(response.data.content || []);
      } catch (error) {
        console.error('Error fetching all cases:', error);
        setError('An error occurred while fetching cases.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllCases();
  }, []);

  const handleDelete = async (caseId) => {
    try {
      await axios.delete(`http://localhost:8080/v1/legalcases/${caseId}`);
      setAllCases((prevCases) => prevCases.filter((caseItem) => caseItem.legalCaseId !== caseId));
    } catch (error) {
      console.error('Error deleting legal case:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <StyledTableContainer component={Paper}>
      <div style={{ fontFamily: 'Dancing Script', paddingTop: '50px', fontSize: '50px' }}>All Cases</div>
      <ArchivedCasesButton component={Link} to="/myCases">
        Archived Cases
      </ArchivedCasesButton>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Case ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCases.map((caseItem) => (
            <TableRow key={caseItem.legalCaseId}>
              <TableCell>{caseItem.legalCaseId}</TableCell>
              <TableCell>{caseItem.legalCaseTitle}</TableCell>
              <TableCell>{caseItem.legalCaseDescription}</TableCell>
              <TableCell>{caseItem.legalCaseStatus}</TableCell>
              <TableCell>
                <DeleteButton variant="contained" onClick={() => handleDelete(caseItem.legalCaseId)}>
                  Delete
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default AllCases;
