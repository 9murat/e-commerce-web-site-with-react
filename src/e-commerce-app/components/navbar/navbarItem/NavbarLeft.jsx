import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavbarLeft() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return (
        <div className='logo' onClick={()=>goToHome()}>My E-Commerce Web Site</div>
    )
}
