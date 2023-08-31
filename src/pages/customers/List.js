import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router'

import CustomerCard from '../../components/CustomerCard'


const List = () => {
    const navigate = useNavigate()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(() => {
                const newCustomersState = customers.filter(customer => customer.id !== id)

                setCustomers(newCustomersState)
            })
    }


    const handleEditCustomer = id => {
        navigate(`/customers/edit/${id}`)
    }

    return (

        <Grid container>
            {
                customers.map(item => (
                    <Grid item xs={12} md={4} sx={{ padding: 5 }} key={item.id}>
                        <CustomerCard
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            onRemoveCustomer={handleRemoveCustomer}
                            onEditCustomer={handleEditCustomer}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default List