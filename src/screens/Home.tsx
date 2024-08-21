import * as React from 'react';
import FriendTable from '../components/FriendTable';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const HomeContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& > *': {
        margin: '10px 0',
    },
});

const HomeTitle = styled(Typography)({
    marginBottom: '20px',
});

const Home: React.FC = () => {
    const theme = useTheme();

    return (
        <HomeContainer>
            <HomeTitle variant="h1" style={{ color: theme.palette.primary.main }}>Friends List</HomeTitle>
            <FriendTable />
        </HomeContainer>
    );
};

export default Home;