import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'


import CustomerCard from '../components/CustomerCard'


const Customers = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    return (

        <Grid container>
            {
                customers.map(item => (
                    <Grid item xs={12} md={4} sx={{ padding: 5 }} key={item.id}>
                        <CustomerCard
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Customers