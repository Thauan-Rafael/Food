function Header(){
    return(
        <nav className="navbar" id='header'>
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <i className="fa-solid fa-utensils"></i>
                <i className="fa-solid fa-face-laugh-beam"></i>
                <i>TR DEV FOODS</i>
                <i className="fa-solid fa-face-laugh-beam"></i>
                <i className="fa-solid fa-utensils"></i>
            </a>
            <a className='navbar-brand' href='#'>
                <i>R$ 00,00</i>
                <i className="fa-solid fa-cart-shopping"></i>
            </a>
            </div>
        </nav>
    )
}
export default Header;