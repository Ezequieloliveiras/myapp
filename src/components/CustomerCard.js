import * as React from "react"

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from "@mui/material"

import ShareIcon from "@mui/icons-material/Share"

import FavoriteIcon from "@mui/icons-material/Favorite"



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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <ShareIcon />
            </CardActions>
        </Card>
    )
}

export default CustomerCard