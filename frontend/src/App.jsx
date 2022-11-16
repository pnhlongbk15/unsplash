import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { auth } from './API/firebase/firebase'
import { useAuth } from './context/AuthProvider'

import Switch from './Router/Switch'
import Layout from './Layout'
import Login from './container/Login'
import Register from './container/Register'

const App = () => {
        // const [loading, setLoading] = useState(true)
        // const [user, setUser] = useState(null);
        // const navigate = useNavigate();
        // useEffect(() => {
        //         const user = auth.currentUser;
        //         setUser(user)
        //         console.log('User', user);
        // })
        const { user } = useAuth();

        return (
                <>
                        <Routes>
                                <Route
                                        path="/*"
                                        element={
                                                <Layout>
                                                        <Switch />
                                                </Layout>
                                        }
                                />
                                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                                <Route path="/register" element={<Register />} />
                        </Routes>
                </>
        )
}

export default App
