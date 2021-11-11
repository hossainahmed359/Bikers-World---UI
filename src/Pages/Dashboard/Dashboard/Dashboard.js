import React from 'react';

// Material UI components
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';


// React Router Components
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from 'react-bootstrap';


// Drawer Width
const drawerWidth = 200;


// ****************************** Main Funciton ******************************
const Dashboard = () => {

    // Load Signed In User
    const { user, handleSignOut } = useAuth();
    console.log(user)

    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let { path, url } = useRouteMatch();

    // Drawer
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ul>
                    <li><Link to={`${url}`}>Default</Link></li>
                    <li><Link to={`${url}/payment`}>Pay</Link></li>
                    <li> <Link to={`${url}/myOrders`}>My Orders</Link></li>
                    <li><Link to={`${url}/review`}>Review</Link></li>
                    <li><Button onClick={handleSignOut} variant="outline-danger">Log Out</Button></li>
                </ul>
            </List>
        </div>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    // Return
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
                    {/* 
                    <li><Link to={`${url}`}>Default</Link></li>
                    <li><Link to={`${url}/payment`}>Pay</Link></li>
                    <li> <Link to={`${url}/myOrders`}>My Orders</Link></li>
                    <li><Link to={`${url}/review`}>Review</Link></li>
                    <li><Button onClick={handleSignOut} variant="outline-danger">Log Out</Button></li>
                        */}
                    <div>
                        <Route exact path="/">Home</Route>
                        <Route path={`${url}/payment`}>Payment Coming Soon</Route>
                        <Route path={`${url}/myOrders`}>Manage Orders</Route>
                        <Route path={`${url}/review`}>Review Website</Route>
                    </div>
                    <Typography paragraph>
                        hello
                    </Typography>

                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;