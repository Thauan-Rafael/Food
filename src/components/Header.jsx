import React from 'react'
import Home from './Home'
function Header({total,setContent, changeContent}){
    return(
        <nav className="navbar" id='header'>
            <div className="container-fluid">
            <a id='title' className="navbar-brand" onClick={openHome}>
                <i className="fa-solid fa-utensils"></i>
                <i className="fa-solid fa-face-laugh-beam"></i>
                <i>TR DEV FOODS</i>
                <i className="fa-solid fa-face-laugh-beam"></i>
                <i className="fa-solid fa-utensils"></i>
            </a>
            <a className='navbar-brand' href='#'>
                <i id='totalPrice'>${total}</i>
                <i className="fa-solid fa-cart-shopping"></i>
            </a>
            </div>
        </nav>
    )
    function openHome(){
        setContent(<Home changeContent={changeContent}/>)
    }
}
export default Header;