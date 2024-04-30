import React from 'react'
import Home from './Home'
import Cart from './Cart'
function Header(props){
    return(
        <nav className="navbar" id='header'>
            <div id="navbarHeader" className="container-fluid">
            <a id='title' className="navbar-brand" onClick={openHome}>
                <i className="fa-solid fa-utensils"></i>
                <i className="fa-solid fa-face-laugh-beam"></i>
                <i>TR DEV FOODS</i>
                <i className="fa-solid fa-face-laugh-beam"></i>
                <i className="fa-solid fa-utensils"></i>
            </a>
            <a id='cartButton' className='navbar-brand' onClick={openCart}>
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
        let itemPrice = document.getElementById('totalPrice').textContent;        
        props.updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
        props.setContent(<Cart cartItems={props.cartItems} selectedItem={props.selectedItem} updateSum={props.updateSum}/>)
    }
}
export default Header;