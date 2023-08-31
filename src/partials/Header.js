import { useState } from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,

} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)


    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        navigate(route)
        handleToggleMenu()
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => handleToggleMenu()}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={() => handleMenuClick('/')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home">Home</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => handleMenuClick('/customers/add')}>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cadastro de Clientes">Cadastro de Clientes</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lista de Clientes">Lista de Clientes</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Header