import pizza from '../media/pizzaImg.png'
import hamburger from '../media/hamburgerImg.png'
import sushi from '../media/sushiImg.png'
function Content(){
    return(
      <>
        <h1 id="homeTitle">Categories</h1>
        <section id="categories" className="container">
            <div className="row">
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Pizza</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={pizza}></img>
                            <button className="btn btn-danger"type="button">See Menu</button>
                        </div>
                    </div>
                </div>
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Hamburger</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={hamburger}></img>
                            <button className="btn btn-danger" type="button">See Menu</button>
                        </div>
                    </div>
                </div>
                <div className="categories-column col-sm-12 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Japanese Food</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={sushi}></img>
                            <button className="btn btn-danger" type="button">See Menu</button>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
      </>
    )
}
export default Content;