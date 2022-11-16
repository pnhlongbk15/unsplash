import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../API/firebase/firebase';
import { handleLoginGG } from '../controller/handleLogin';
import { handleLogout } from '../controller/handleLogout';
import { client } from "../API/sanity/client";

const AuthContext = React.createContext();

export const useAuth = () => {
        return React.useContext(AuthContext);
}

const ContextProvider = ({ children }) => {
        const [loading, setLoading] = useState(true);
        const [user, setUser] = useState(null);
        const navigate = useNavigate()

        useEffect(() => {
                const unsubscribe = auth.onAuthStateChanged(async (user) => {
                        if (user) {
                                setUser(user)

                                const { displayName, email, photoURL, uid } = user;
                                const doc = {
                                        _id: uid,
                                        _type: "user",
                                        userName: displayName,
                                        email: email,
                                        image: photoURL,
                                }

                                await client.createIfNotExists(doc)
                                        .then(() => {
                                                navigate('/', { replace: true })
                                        })
                                        .catch((error) => {
                                                console.error(error)
                                        })

                                console.log('co user', doc)

                        } else {
                                console.log('khong co user');
                        }
                        setLoading(false)
                });

                return unsubscribe
        }, [navigate])

        const value = {
                user,
                handleLoginGG,
                handleLogout
        }
        return (
                <AuthContext.Provider value={value}>
                        {!loading && children}
                </AuthContext.Provider>
        )
}

export default ContextProvider
