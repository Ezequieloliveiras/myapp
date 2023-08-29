import * as React from 'react'


import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import ShareIcon from '@mui/icons-material/Share'

import FavoriteIcon from '@mui/icons-material/Favorite'



const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
}) => {

    return (
        <Card sx={{maxWidth: 345}}>
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