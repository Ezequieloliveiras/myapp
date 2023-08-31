
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import axios from 'axios'

import {
    useParams
} from 'react-router-dom'

import Toasty from '../../components/Toasty'

const StyledDiv = styled('div')(({ theme }) => ({

    margin: theme.spacing(4)

}))


const Edit = () => {
    const [name, setName] = useState('Ezequiel')
    const [job, setJob] = useState('')

    const { id } = useParams()

    console.log(id)

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)

        let hasError = false
        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o campo nome corretamente!'
            }
        }

        if (!form.job.value) {
            hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite o campo cargo corretamente!'
            }
        }
        if (hasError) {
            return setForm(newFormState)
        }
        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setOpenToasty(true)
            setIsLoading(false)
        })
    }

    return (
        <>
            <StyledDiv>
                <TextField
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    label='Digite o seu nome'
                    name='name'
                    value={form.name.value}
                    onChange={handleInputChange} />
            </StyledDiv>
            <StyledDiv>
                <TextField
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    label='Digite o seu cargo'
                    name='job'
                    value={form.job.value}
                    onChange={handleInputChange} />
            </StyledDiv>
            <StyledDiv>
                <Button variant="contained" onClick={handleRegisterButton} disabled={isLoading}>
                    {
                        isLoading ? 'Aguarde...' : 'Salvar'
                    }
                </Button>
            </StyledDiv>
            <Toasty
                open={openToasty}
                severity="success"
                message="Registro realizado com sucesso!"
                onClose={() => setOpenToasty(false)}
            />
        </>
    )
}

export default Edit