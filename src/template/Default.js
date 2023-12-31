
import Container from '@mui/material/Container'
import Header from "../partials/Header"
import { styled } from '@mui/material/styles';


const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3), 
 
}))

const Default = ({ children }) => {

    return (
        <>
            <Header />
            <StyledContainer style={{paddingLeft:"0px",paddingRight:"0px"}}>
                {children}
            </StyledContainer>
        </>
    )
}

export default Default