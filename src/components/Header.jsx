import React from 'react'
import Home from './Home'
import Cart from './Cart'
function Header(props){
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
            <a className='navbar-brand' onClick={openCart}>
                <i id='totalPrice'>${props.total}</i>
                <i className="fa-solid fa-cart-shopping"></i>
            </a>
            </div>
        </nav>
    )
    function openHome(){
        let itemPrice = document.getElementById('totalPrice').textContent;        
        props.updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
        props.setContent(<Home changeContent={props.changeContent}/>)
    }
    function openCart(){
        props.setContent(<Cart selectedItem={props.selectedItem}/>)
    }
}
export default Header;