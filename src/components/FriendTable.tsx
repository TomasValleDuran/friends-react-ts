import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { useFriends } from '../hooks/useFriends.ts';
import { Friend } from '../types/Friend';

const CustomTooltip = styled(Tooltip)({
    cursor: 'pointer',
});

export default function FriendTable() {
    const { data, error, isLoading } = useFriends();

    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert severity="error">Failed to load friends data.</Alert>;
    }

    const friends: Friend[] = data || [];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">Addresses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {friends.map((friend) => (
                        <TableRow key={friend.id}>
                            <TableCell align="center" component="th" scope="row">
                                {friend.name}
                            </TableCell>
                            <TableCell align="center">{friend.email}</TableCell>
                            <TableCell align="center">{friend.phone}</TableCell>
                            <TableCell align="center">
                                <CustomTooltip
                                    title={
                                        <div>
                                            {friend.addresses.map((address, index) => (
                                                <p key={index}>
                                                    {address.street}, {address.city}, {address.state}
                                                </p>
                                            ))}
                                        </div>
                                    }
                                >
                                    <b>Addresses</b>
                                </CustomTooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}