import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllAppointments = () => {
    const { token } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://cryptic-lowlands-15291.herokuapp.com/appointments`;
        // const url = `http://localhost:5000/appointments`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [token])
    return (
        <div>
            <h2>All Appointments: {appointments.length} </h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: '20px' }}>Name</TableCell>
                            <TableCell style={{ fontSize: '20px' }} align="right">Service Name</TableCell>
                            <TableCell style={{ fontSize: '20px' }} align="right">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllAppointments;