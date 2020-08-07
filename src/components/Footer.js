import React from 'react'

function Footer() {
    return (

        <footer className="container">
            © {new Date().getFullYear()}, Lynda Ash
            {` `}<br />
            Built by <a href="https://kecskes.net">Adam Kecskes Consulting</a>
        </footer>
    )
}

export default Footer
