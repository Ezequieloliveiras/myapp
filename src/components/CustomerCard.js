import * as React from "react"

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from "@mui/material"


import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';



const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
}) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={avatar}>
                        R
                    </Avatar>
                }

                title={`${name} ${lastname}`}
                subheader={email}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="editar cadastro">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="remover cadastro">
                <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CustomerCard