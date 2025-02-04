import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import Navigation from '../Components/Navigation'

function Userlayout() {
    return (
        <div className='userlayout'>
            <Header />
           <Navigation/>
            <div className='content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Userlayout