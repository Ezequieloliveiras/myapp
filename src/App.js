
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TemplateDefault from './template/Default'
import Customers from './pages/Customers'
import Home from './pages/Home'
import Page from '../src/template/Page' // Importando o componente Page

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          {/* Usando o componente Page para renderizar as páginas */}
          <Route
            path='/customers'
            element={<Page title="Customers" component={Customers} />} // Conectando o componente Customers
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

