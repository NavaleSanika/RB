import React from 'react'
import { Whatsapp, Facebook, Envelope, Instagram } from 'react-bootstrap-icons'
import { Row, Col } from 'antd'

function AboutUs() {
    return (
        <div style={{ background: "#f5f7fa", minHeight: "100vh", padding: "30px" }}>

            {/* Title */}
            <Row gutter={[16, 16]} justify="center">
                <Col md={10}>
                    <h1 style={{
                        textAlign: "center",
                        background: "#ffffff",
                        padding: "15px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        fontWeight: "600"
                    }}>
                        Resume Builder
                    </h1>
                </Col>
            </Row>

            {/* Description */}
            <Row gutter={[16, 16]} justify="center">
                <Col md={10}>
                    <div style={{
                        marginTop: "20px",
                        padding: "20px",
                        background: "white",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        textAlign: "justify"
                    }}>
                        A curated collection of visually striking and professionally crafted resume and cover letter templates helps you stand out in a competitive job market.

                        <br /><br />

                        Our platform offers premium-quality templates tailored for various industries. Each template is ATS-friendly, employer-ready, and easy to customize.

                        <br /><br />

                        Choose from a wide range of designs and create a professional resume in minutes using our intuitive builder.
                    </div>
                </Col>
            </Row>

            {/* Image */}
            <Row gutter={[16, 16]} justify="center">
                <Col md={10}>
                    <div style={{
                        marginTop: "20px",
                        textAlign: "center"
                    }}>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/10/06/09/34/group-2822423__340.png"
                            alt="discussion"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                            }}
                        />
                    </div>
                </Col>
            </Row>

            {/* Social Section */}
            <Row gutter={[16, 16]} justify="center">
                <Col md={10}>
                    <div style={{
                        marginTop: "40px",
                        background: "white",
                        padding: "15px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        textAlign: "center"
                    }}>
                        <h4 style={{ marginBottom: "15px" }}>Share</h4>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px"
                        }}>
                            <Whatsapp style={{ fontSize: "26px", color: "green", cursor: "pointer" }} />
                            <Facebook style={{ fontSize: "26px", color: "#1877f2", cursor: "pointer" }} />
                            <Envelope style={{ fontSize: "26px", color: "red", cursor: "pointer" }} />
                            <Instagram style={{ fontSize: "26px", color: "#c50d66", cursor: "pointer" }} />
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default AboutUs