import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {templateImagesPaths} from '../Data/Data'
import { useDispatch } from 'react-redux'
import {updateState} from '../../ReduxManager/dataStoreSlice'
const shortid= require('shortid')

function Home() {
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')
    const dispatch = useDispatch();

    return (
        <div style={{ minWidth:'300px', background:"#f5f7fa", minHeight:"100vh", padding:"30px" }}>

            {/* Title */}
            <div style={{ textAlign:"center", marginBottom:"40px" }}>
                <h2 style={{ fontWeight:"600", color:"#1f2937" }}>
                    Select a Template
                </h2>
                <p style={{ color:"#6b7280" }}>
                    Choose a professional resume template to get started
                </p>
            </div>

            <div className='container'>
                <div className='row'>
                    {templateImagesPaths.map((currentTemplate)=>{
                        return(
                            <div className='col-lg-3 col-md-6 col-12 mb-4' key={shortid.generate()}>

                                <div 
                                    style={{ 
                                        position: "relative",
                                        background: "white",
                                        padding: "12px",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                        transition: "0.3s",
                                        cursor:"pointer"
                                    }}
                                    onMouseOver={()=> setIsMouseOver(currentTemplate.name)}
                                    onMouseOut={()=> setIsMouseOver('MouseIsNotOver')}
                                    onMouseEnter={(e)=> e.currentTarget.style.transform="translateY(-5px)"}
                                    onMouseLeave={(e)=> e.currentTarget.style.transform="translateY(0px)"}
                                >

                                    {/* Template Name */}
                                    <h5 style={{ textAlign:"center", marginBottom:"10px" }}>
                                        {currentTemplate.name}
                                    </h5>

                                    {/* Image */}
                                    <img 
                                        className="w-100"
                                        src={currentTemplate.imageSource} 
                                        alt="template"
                                        style={{
                                            borderRadius: "10px",
                                            height:"250px",
                                            objectFit:"cover"
                                        }}
                                    />

                                    {/* Overlay Button */}
                                    {isMouseOver === currentTemplate.name &&
                                        <Link to="/detailsfillingpage/personalinfo">
                                            <button
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    background: "#1677ff",
                                                    color: "white",
                                                    padding: "10px 18px",
                                                    borderRadius: "8px",
                                                    border: "none",
                                                    fontWeight:"500",
                                                    cursor: "pointer"
                                                }}
                                                onClick={()=>{
                                                    dispatch(updateState({
                                                        key: 'selectedTemplate',
                                                        value: currentTemplate.name
                                                    }))
                                                }}
                                            >
                                                Use Template
                                            </button>
                                        </Link>
                                    }

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Home
