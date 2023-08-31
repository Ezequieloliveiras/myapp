
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({

    margin: theme.spacing(4)

}));

const Register = () => {
        const [name, setName] = useState('')
        const [job, setJob] = useState('')

    return (
        <>
            <StyledDiv>
                <TextField label='Digite o seu nome' />
            </StyledDiv>
            <StyledDiv>
                <TextField label='Digite o seu cargo' />
            </StyledDiv>
            <StyledDiv>
                <Button variant="contained">Cadastrar</Button>
            </StyledDiv>
        </>
    )
}

export default Register