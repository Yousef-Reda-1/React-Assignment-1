import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [shrink, setShrink] = useState('false')

    useEffect(() => {

        function handleNavHeight() {
            setShrink(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleNavHeight, { passive: true })

        handleNavHeight()

        return (() => window.removeEventListener('scroll', handleNavHeight))
    }, [])

    return (
        <>
            <nav className="navbar customize navbar-expand-lg bg-body-tertiary fixed-top" style={{ padding: shrink ? '0.75rem 0' : '1.5rem 0' }} >
                <div className="container">
                    <Link className="navbar-brand" to="./">Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
