import React from 'react'
function Cart(props){
    return(
        <>
            <div className='cartList container'>
                <h1>Cart</h1>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                <button className='btn btn-success' onClick={seeItens}>Buy</button>
            </div>
        </>
    )
    function seeItens(){
        alert(props.itemName)
        alert(props.itemValue)
    }
}
export default Cart;