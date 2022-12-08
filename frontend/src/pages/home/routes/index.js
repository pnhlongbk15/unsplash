import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '~/pages/home/Home'
import Layout from '~/pages/home/layout'

export default  function () {
        return (
                <Routes>
                        <Route
                                path="/"
                                element={
                                        <Layout>
                                                <Home />
                                        </Layout>
                                } />
                </Routes>
        )
}

