import React from 'react'
import { FileEarmarkTextFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div style={{
            background: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            position: "sticky",
            top: 0,
            zIndex: 1000
        }}>
            <nav className="navbar navbar-expand-lg p-2">
                <div className="container-fluid">

                    {/* Logo */}
                    <div className="navbar-brand d-flex align-items-center"
                        style={{
                            color: "#1677ff",
                            fontSize: "24px",
                            fontWeight: "600"
                        }}>
                        <FileEarmarkTextFill style={{ marginRight: "8px" }} />
                        Resume Builder
                    </div>

                    {/* Mobile Button */}
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto d-flex align-items-center gap-4">

                            <Link to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "#333",
                                    fontWeight: "500"
                                }}>
                                Templates
                            </Link>

                            <Link to="/myresume"
                                style={{
                                    textDecoration: "none",
                                    color: "#333",
                                    fontWeight: "500"
                                }}>
                                My Resume
                            </Link>

                            <Link to="/about"
                                style={{
                                    textDecoration: "none",
                                    color: "#333",
                                    fontWeight: "500"
                                }}>
                                About
                            </Link>

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar