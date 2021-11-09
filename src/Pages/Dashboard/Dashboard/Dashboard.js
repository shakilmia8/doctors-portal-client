import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AllAppointments from '../AllAppointments/AllAppointments';

const drawerWidth = 200;



const Dashboard = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let { path, url } = useRouteMatch();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/appointment'><Button>Appointment</Button></Link>
            <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}`}><Button>Dashboard</Button></Link>
            {
                admin && <Box>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/allAppointments`}><Button>All Appointments</Button></Link>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/addDoctor`}><Button>Add Doctor</Button></Link>
                </Box>
            }

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Doctor's Portal Dashboard
                        </Typography>
                        <Typography style={{ float: 'right' }} variant="h6" noWrap component="div">
                            {user.displayName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <AdminRoute path={`${path}/allAppointments`}>
                            <AllAppointments key={user._id}></AllAppointments>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addDoctor`}>
                            <AddDoctor></AddDoctor>
                        </AdminRoute>
                    </Switch>


                </Box>
            </Box>

        </div>
    );
};

export default Dashboard;