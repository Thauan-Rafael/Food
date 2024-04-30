import React from 'react'
import sushi from '../media/japaneseFoods/sushiImg.png'
import yakisoba from '../media/japaneseFoods/yakisobaImg.png'
import gyoza from '../media/japaneseFoods/gyozaImg.png'
import Categories from '../components/Categories.jsx'

let index = 0;
function Japanese({sum,updateSum,setTotal,setContent,selectedItem}){
    function changeValue(event){
        switch (event.target.name) {
            case 'sushi':
                document.getElementById('sushi').textContent = 'Sushi '+'- $'+event.target.value;
                break;
            case 'yakisoba':
                document.getElementById('yakisoba').textContent = 'Yakisoba '+'- $'+event.target.value
                break;
            case 'gyoza':
                document.getElementById('gyoza').textContent = 'Gyoza '+'- $'+event.target.value
                break;
            default:
                break;
        }
    }
    function addTotal(event){
        let itemPrice = ''
        switch (event.target.id) {
            case 'addSushi':
                itemPrice = document.getElementById('sushi').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="sushi"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+`(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{alert('Empty')}
                break;
            case 'addYakisoba':
                itemPrice = document.getElementById('yakisoba').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="yakisoba"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+`(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{alert('Empty')}
                break;
            case 'addGyoza':
                itemPrice = document.getElementById('gyoza').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="gyoza"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+`(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{alert('Empty')}
                break;
                
            default:
                break;
        }
    }
    return(
        <>
            <div className='itemPage'>
                <Categories btn1='Pizza' btn2='Hamburger' btn3='Cakes' btn4='Ice Cream' btn5='Drinks' sum={sum} updateSum={updateSum} setTotal={setTotal} setContent={setContent} selectedItem={selectedItem}/>
                <div id='japaneseCards' className='itemOptions container'>
                    <JapaneseCard name='Sushi' img={sushi} price={8.00}/>
                    <JapaneseCard name='Yakisoba' img={yakisoba} price={8.00}/>
                    <JapaneseCard name='Gyoza' img={gyoza} price={6.00}/>
                </div>
            </div>
        </>
    )
    
    function JapaneseCard(props){
        let taste = props.name.toLowerCase()
        return(
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={props.img}></img>
                </div>
                <div className="card-footer">
                    <h3 id={taste}>{props.name}</h3>
                    <div className='buyItem'>
                        <div className="sizes btn-group" role="group">
                            <input type="radio" className="btn-check" name={taste} id={taste+'P'} autoComplete="off" onClick={changeValue} value={props.price}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'P'}>Small</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+5}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>Medium</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+10}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'G'}>Large</label>
                        </div>
                        <button id={'add'+props.name} className='cartBtn btn btn-warning' onClick={addTotal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Japanese;