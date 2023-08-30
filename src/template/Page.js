import React from "react"
import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import PropTypes from "prop-types"

const useStyles = styled((theme) => ({ // Adição do parâmetro theme
    container: {
        padding: theme.spacing(2), // Usando o sistema de espaçamento do theme
    },
}))

const Page = ({ title, component: Component }) => { // Renomeando para 'Component'
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant='h3' component='h1'> {/* Adição do componente 'h1' */}
                {title}
            </Typography>
            <Component /> {/* Renderizando o componente */}
        </div>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    component: PropTypes.elementType.isRequired,
}

export default Page;

