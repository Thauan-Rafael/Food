import React from 'react'
import pepperoni from '../media/pizzas/pepperoniImg.png'
import margherita from '../media/pizzas/margheritaImg.png'
import cheese from '../media/pizzas/cheeseImg.png'
function Pizza({sum,total,setTotal}){
    function changeValue(event){
        switch (event.target.name) {
            case 'pepperoni':
                document.getElementById('pepperoniPizza').textContent = 'Pepperoni '+'- $'+event.target.value;
                break;
            case 'margherita':
                document.getElementById('margheritaPizza').textContent = 'Margherita '+'- $'+event.target.value
                break;
            case 'cheese':
                document.getElementById('cheesePizza').textContent = 'Cheese '+'- $'+event.target.value
                break;
            default:
                break;
        }
    }
    function addTotal(event){
        switch (event.target.id) {
            case 'addPepperoni':
                if(document.getElementById('pepperoniPizza').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('pepperoniPizza').textContent.slice(13,15))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addMargherita':
                if(document.getElementById('margheritaPizza').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('margheritaPizza').textContent.slice(14,16))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addCheese':
                if(document.getElementById('cheesePizza').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('cheesePizza').textContent.slice(10,14))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
                
            default:
                break;
        }
    }
    return(
        <>
            <div id='pizzaCards' className='container'>
                <div className="card">
                    <div className="card-body">
                        <img className="card-image" src={pepperoni}></img>
                    </div>
                    <div className="card-footer">
                        <h3 id='pepperoniPizza'>Pepperoni</h3>
                        <div className='buyPizza'>
                            <div className="btn-group" role="group">
                                <input type="radio" className="btn-check" name="pepperoni" id="pepperoniP" autoComplete="off" onClick={changeValue} value={10.00}/>
                                <label className="btn btn-outline-primary" htmlFor="pepperoniP">Small</label>
                                <input type="radio" className="btn-check" name="pepperoni" id="pepperoniM" autoComplete="off" onClick={changeValue} value={13.00}/>
                                <label className="btn btn-outline-primary" htmlFor="pepperoniM">Medium</label>
                                <input type="radio" className="btn-check" name="pepperoni" id="pepperoniG" autoComplete="off" onClick={changeValue} value={16.00}/>
                                <label className="btn btn-outline-primary" htmlFor="pepperoniG">Large</label>
                            </div>
                            <button id='addPepperoni' className='btn btn-warning' onClick={addTotal}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="card-image" src={margherita}></img>
                    </div>
                    <div className="card-footer">
                        <h3 id='margheritaPizza'>Margherita</h3>
                        <div className='buyPizza'>
                            <div className="btn-group" role="group">
                                <input type="radio" className="btn-check" name="margherita" id="margheritaP" autoComplete="off" onClick={changeValue} value={9.00}/>
                                <label className="btn btn-outline-primary" htmlFor="margheritaP">Small</label>
                                <input type="radio" className="btn-check" name="margherita" id="margheritaM" autoComplete="off" onClick={changeValue} value={12.00}/>
                                <label className="btn btn-outline-primary" htmlFor="margheritaM">Medium</label>
                                <input type="radio" className="btn-check" name="margherita" id="margheritaG" autoComplete="off" onClick={changeValue} value={14.00}/>
                                <label className="btn btn-outline-primary" htmlFor="margheritaG">Large</label>
                            </div>
                            <button id='addMargherita' className='btn btn-warning' onClick={addTotal}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="card-image" src={cheese}></img>
                    </div>
                    <div className="card-footer">
                        <h3 id='cheesePizza'>Cheese</h3>
                        <div className='buyPizza'>
                            <div className="btn-group" role="group">
                                <input type="radio" className="btn-check" name="cheese" id="cheeseP" autoComplete="off" onClick={changeValue} value={8.50}/>
                                <label className="btn btn-outline-primary" htmlFor="cheeseP">Small</label>
                                <input type="radio" className="btn-check" name="cheese" id="cheeseM" autoComplete="off" onClick={changeValue} value={11.50}/>
                                <label className="btn btn-outline-primary" htmlFor="cheeseM">Medium</label>
                                <input type="radio" className="btn-check" name="cheese" id="cheeseG" autoComplete="off" onClick={changeValue} value={14.50}/>
                                <label className="btn btn-outline-primary" htmlFor="cheeseG">Large</label>
                            </div>
                            <button id='addCheese' className='btn btn-warning' onClick={addTotal}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pizza;