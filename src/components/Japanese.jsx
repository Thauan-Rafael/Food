import React from 'react'
import sushi from '../media/japaneseFoods/sushiImg.png'
import yakisoba from '../media/japaneseFoods/yakisobaImg.png'
import gyoza from '../media/japaneseFoods/gyozaImg.png'
import Categories from '../components/Categories.jsx'

function Japanese({sum,setTotal,setContent}){
    function changeValue(event){
        switch (event.target.name) {
            case 'sushi':
                document.getElementById('sushi').textContent = 'sushi '+'- $'+event.target.value;
                break;
            case 'yakisoba':
                document.getElementById('yakisoba').textContent = 'yakisoba '+'- $'+event.target.value
                break;
            case 'gyoza':
                document.getElementById('gyoza').textContent = 'gyoza '+'- $'+event.target.value
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
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addYakisoba':
                itemPrice = document.getElementById('yakisoba').textContent;
                if(itemPrice.includes('$')){
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addGyoza':
                itemPrice = document.getElementById('gyoza').textContent;
                if(itemPrice.includes('$')){
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
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
            <div className='itemPage'>
                <Categories btn1='Pizza' btn2='Hamburger' btn3='Cakes' btn4='Ice Cream' btn5='Drinks' sum={sum} setTotal={setTotal} setContent={setContent}/>
                <div id='japaneseCards' className='itemOptions container'>
                    <JapaneseCard name='Sushi' img={sushi} price={10.00}/>
                    <JapaneseCard name='Yakisoba' img={yakisoba} price={9.00}/>
                    <JapaneseCard name='Gyoza' img={gyoza} price={8.50}/>
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
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+3}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>Medium</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+6}/>
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