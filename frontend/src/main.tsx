import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import CreatePoll from './pages/CreatePoll.tsx'
import CreateSurvey from './pages/CreateSurvey.tsx'
import CreateQizz from './pages/CreateQizz.tsx'
import Features from './pages/Features.tsx'
import Demo from './pages/Demo.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path='/create-poll' element={<CreatePoll />}></Route>
            <Route path='/create-survey' element={<CreateSurvey />}></Route>
            <Route path='/create-quiz' element={<CreateQizz />}></Route>
            <Route path='/features' element={<Features />}></Route>
            <Route path='/demo' element={<Demo />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>,
)
