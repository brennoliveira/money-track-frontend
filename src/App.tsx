import './App.css'
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register'/>
          <Route path='/dashboard'/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
