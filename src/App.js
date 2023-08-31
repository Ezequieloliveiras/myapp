
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TemplateDefault from './template/Default'
import CustomersList from './pages/customers/List'
import Home from './pages/Home'
import Page from '../src/template/Page' // Importando o componente Page
import CustomersRegister from './pages/customers/Register'


const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          {/* Usando o componente Page para renderizar as páginas */}
          <Route
            path='/customers/add'
            element={<Page title="Cadastro de Clientes" component={CustomersRegister} />} // Conectando o componente Home
          />
          <Route
            path='/customers'
            element={<Page title="Lista de Clientes" component={CustomersList} />} // Conectando o componente Customers
          />
          <Route
            path='/'
            element={<Page title="Home" component={Home} />} // Conectando o componente Home
          />
        </Routes>
      </TemplateDefault>
    </Router>
  )
}

export default App

