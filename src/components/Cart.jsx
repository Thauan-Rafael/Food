import React from 'react'
function Cart(props){
    function seeItems(){
        console.log(props.cartItems)
        props.selectedItem.forEach((item, index) => {
            if (item.name in props.itemQuantities) {
                props.cartItems.find(product => product.name === item.name).quantity +=1;
            } else {
                props.itemQuantities[item.name] = 1;
                props.cartItems.push({name:item.name,price:item.price,quantity:1})
            }
        });
        return props.cartItems.map((item, index) => (
            <div id='cartItem' key={index}>
                <h3>{item.name} - ${item.price}</h3>
                <div id='quantity'>
                    <h3 onClick={() => changeQuantity(item.name,item.price,'-')}>-</h3>
                    <h3 id={`quantity${index}`}>{item.quantity}</h3>
                    <h3 onClick={() => changeQuantity(item.name,item.price,'+')}>+</h3>
                </div>
                <h3>X</h3>
            </div>
        ));
    }
    function changeQuantity(name,price,operation){
        let itemIndex = props.cartItems.findIndex(item => item.name === name);
        if(operation == '-'){
            if(props.cartItems[itemIndex].quantity == 1){
                alert('Only have one')
            }
            else{
                props.cartItems[itemIndex].quantity--;
                props.updateSum(price*(-1))
                document.getElementById(`quantity${itemIndex}`).textContent = props.cartItems[itemIndex].quantity;
            }
        }
        if(operation == '+'){
            props.cartItems[itemIndex].quantity++;
            props.updateSum(price)
            document.getElementById(`quantity${itemIndex}`).textContent = props.cartItems[itemIndex].quantity;
        }
    }

    return(
        <>
            <div className='cartList container'>
                <h1>Cart</h1>
                <div id='cartItens'>
                    {seeItems()}   
                </div>
                
                <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Buy</button>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirmation</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">The total is {document.getElementById('totalPrice').textContent}, finish the purchase?</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button id='confirmButton' type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmationModal">Yes</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="confirmationModal" aria-hidden="true" aria-labelledby="confirmationModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Success</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Thanks for buying
                    </div>
                    <div className="modal-footer">
                        <button id='closeButton' className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;