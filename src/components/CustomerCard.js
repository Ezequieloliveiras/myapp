import React, {useState} from "react"

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from "@mui/material"


import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from "./ModalConfirm"

const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    onRemoveCustomer,
}) => {

    const [openModal, setOpenModal] = useState(false)

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = id => {
        onRemoveCustomer(id)
        handleToggleOpenModal()
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }

    return (

        <>  <Card sx={{ maxWidth: 345 }}>
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
                    <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalConfirm 
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={() => handleConfirmModal (id)}
                title='Deseja realmente excluir esse cadastro?'
                message='Ao confirmar não será possível excluir esta operação.'
            />
        </>

    )
}

export default CustomerCard