import React from 'react';

// Material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';


// React Router Components
import {
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


import Payment from '../UsersSection/Payment/Payment';
import MyOrders from '../UsersSection/MyOrders/MyOrders';
import Review from '../UsersSection/Review/Review';
import Button from '@mui/material/Button';
import MakeAdmin from '../AdminSection/MakeAdmin/MakeAdmin';
import DashboardHome from './DashboardHome/DashboardHome';


// Drawer Width
const drawerWidth = 200;


// ****************************** Main Funciton ******************************
const Dashboard = () => {

    // Load Signed In User
    const { user, handleSignOut, admin } = useAuth();

    // Dashboard Options
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Nested Route Options
    let { path, url } = useRouteMatch();


    // User Sign Out
    const handleLogOut = () => {
        const proceed = window.confirm('Are you sure you want to log out ?');
        if (proceed) {
            handleSignOut();
        }
    }

    // Drawer
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {/* ****************************************** General User And Admin Links ****************************************** */}
            <List>
                <ul>
                    <li><Link to={`${url}`}>Default</Link></li>
                </ul>
                {admin ?
                    <ul>
                        <li><Link to={`${url}/manageAllOrders`}>Manage All Orders</Link></li>
                        <li> <Link to={`${url}/addProduct`}>Add A Product</Link></li>
                        <li><Link to={`${url}/makeAdmin`}>Make Admin</Link></li>
                        <li><Link to={`${url}/mangeProducts`}>Manage Products</Link></li>
                    </ul>
                    :
                    <ul>
                        <li><Link to={`${url}/payment`}>Pay</Link></li>
                        <li> <Link to={`${url}/myOrders`}>My Orders</Link></li>
                        <li><Link to={`${url}/review`}>Review</Link></li>
                    </ul>
                }
                <ul>
                    <li><Button onClick={handleLogOut} variant="text" color="error" >Log Out</Button></li>
                </ul>
            </List>
        </div>
    );



    // *********************** Return ***********************
    return (
        <div>
            {/* Drawer */}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: 'white',
                        color: '#E52727 ',
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
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        // container={container}
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

                    {/* ****************************************** General User and Admin Routes ****************************************** */}
                    <Route exact path={path}><DashboardHome></DashboardHome></Route>
                    {admin ?
                        <div>
                            {/* Admin */}
                            <Route path={`${url}/manageAllOrders`}>Manage All Orders</Route>
                            <Route path={`${url}/addProduct`}>Add A Product</Route>
                            <Route path={`${url}/makeAdmin`}><MakeAdmin></MakeAdmin></Route>
                            <Route path={`${url}/mangeProducts`}>Manage Products</Route>
                        </div>
                        :
                        <div>
                            {/* Regular User */}
                            <Route path={`${url}/payment`}><Payment></Payment></Route>
                            <Route path={`${url}/myOrders`}><MyOrders userEmail={user.email}></MyOrders></Route>
                            <Route path={`${url}/review`}><Review></Review></Route>
                        </div>
                    }
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;