import React from 'react'
function Cart(props){
    const [reload, setReload] = React.useState(false);
    React.useEffect(() => {
        seeItems();
    }, [reload]);
    seeItems();
    function seeItems(deletedItem){
        if(props.selectedItem.length > 0){
            props.selectedItem.forEach((item) => {
                const existingItem = props.cartItems.find(product => product.name === item.name)
                if(!existingItem){
                    props.cartItems.push({name:item.name,price:item.price,quantity:1,index:item.index})
                }
                else{
                    props.cartItems.find(product => product.name === item.name).quantity = props.selectedItem.filter(product => product.name === item.name).length;
                }
            });
        }
        else{
            let deletedIndex = props.cartItems.findIndex(item => item.name === deletedItem);
            if(deletedIndex != -1){
                props.cartItems.splice(deletedIndex,1)
                console.log(props.cartItems)
                setReload(!reload)
            }
            else{
                return;
            }
        }
    }
    function changeQuantity(name,price,operation){
        let itemIndex = props.cartItems.findIndex(item => item.name === name);
        if(operation == '-'){
            if(props.selectedItem.filter(product => product.name === name).length == 1){
                alert('Only have one')
            }
            else{
                props.updateSum(price*(-1))
                for(let i = props.selectedItem.filter(product => product.name === name).length-1; i>=0;i--){
                    if(name == props.selectedItem.find(product=>product.name == name).name){
                        let selectedIndex = props.selectedItem.findIndex(product => product.name === name);
                        if (selectedIndex !== -1) {
                            props.selectedItem.splice(selectedIndex, 1);
                            document.getElementById(`quantity${itemIndex}`).textContent = props.selectedItem.filter(product => product.name === name).length;
                        }
                        seeItems()
                        return;
                    }
                }
            }
        }
        if(operation == '+'){
            props.selectedItem.push({name:name,price:price,index:props.selectedItem.filter(product => product.name === name).length})
            props.updateSum(price)
            document.getElementById(`quantity${itemIndex}`).textContent = props.selectedItem.filter(product => product.name === name).length
            seeItems()
        }
    }
    function deleteItem(name,price){
        let itemIndex = props.cartItems.findIndex(item => item.name === name);
        let itemsToRemove = props.selectedItem.filter(product => product.name === name);
        let numItemsToRemove = itemsToRemove.length;
        props.updateSum(price * -numItemsToRemove);
        for (let i = numItemsToRemove - 1; i >= 0; i--) {
            let selectedIndex = props.selectedItem.findIndex(product => product.name === name);
            if (selectedIndex !== -1) {
                props.selectedItem.splice(selectedIndex, 1);
                document.getElementById(`quantity${itemIndex}`).textContent = props.selectedItem.filter(product => product.name === name).length;
                seeItems(name);
            }
        }
    }

    return(
        <>
            <div className='cartList container'>
                <h1>Cart</h1>
                <div id='cartItens'>
                    {props.cartItems.map((item, index) => (
                        <div id='cartItem' key={index}>
                            <h3>{item.name} - ${item.price}</h3>
                            <div id='quantity'>
                                <h3 onClick={() => changeQuantity(item.name,item.price,'-')}>-</h3>
                                <h3 id={`quantity${index}`}>{item.quantity}</h3>
                                <h3 onClick={() => changeQuantity(item.name,item.price,'+')}>+</h3>
                            </div>
                            <h3 onClick={() => deleteItem(item.name,item.price)}>X</h3>
                        </div>
                    ))}   
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