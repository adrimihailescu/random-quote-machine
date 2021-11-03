import React from 'react'
import './Layout.css'

const Layout = ({children}) => {
    return (
        <main className="main-css">
            {children}
        </main>
    )
}

export default Layout
