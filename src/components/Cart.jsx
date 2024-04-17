import React from 'react'
function Cart(props){
    function seeItens(){
        return props.itemName.map((name,index) =>(
            <h3 key={index}>{name} - ${props.itemValue[index]}</h3>
        ))
    }
    return(
        <>
            <div className='cartList container'>
                <h1>Cart</h1>
                <div id='cartItens'>
                    {seeItens()}   
                </div>
                
                <button className='btn btn-success' onClick={seeItens} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Buy</button>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirmation</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">The total is {document.getElementById('totalPrice').textContent}, finish the purchase?</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button id='confirmButton' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmationModal">Yes</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="confirmationModal" aria-hidden="true" aria-labelledby="confirmationModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Success</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Thanks for buying
                    </div>
                    <div class="modal-footer">
                        <button id='closeButton' class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;