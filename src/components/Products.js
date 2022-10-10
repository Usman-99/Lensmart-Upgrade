import "./Products.css"
import card from "./CardsData";
import ProductCard from "./ProductCard";
export default function Products() {

    return (
        <>
            <section id="man">
                <div className='app'>
                    <h1>Man Glasses</h1>
                    {card[0].length > 0 ?
                        (<div className="container">
                            {card[0].map((card, i) => (
                                <ProductCard product={card} key={i} />
                            ))}
                        </div>) : (<div className='empty'><h2>NO Products FOUND</h2> </div>)
                    }

                </div>
            </section>
            <section id="woman">
                <div className='app'>
                    <h1>Woman Glasses</h1>
                    {card[1].length > 0 ?
                        (<div className="container">
                            {card[1].map((card, i) => (
                                <ProductCard product={card} key={i} />
                            ))}
                        </div>) : (<div className='empty'><h2>NO Products FOUND</h2> </div>)
                    }

                </div>
            </section>
            <section id="kid">
                <div className='app'>
                    <h1>Kids Glasses</h1>
                    {card[2].length > 0 ?
                        (<div className="container">
                            {card[2].map((card, i) => (
                                <ProductCard product={card} key={i} />
                            ))}
                        </div>) : (<div className='empty'><h2>NO Products FOUND</h2> </div>)
                    }
                </div>
            </section>
            <section id="sun">
                <div className='app'>
                    <h1>SunGlasses</h1>
                    {card[3].length > 0 ?
                        (<div className="container">
                            {card[3].map((card, i) => (
                                <ProductCard product={card} key={i} />
                            ))}
                        </div>) : (<div className='empty'><h2>NO Products FOUND</h2> </div>)
                    }
                </div>
            </section>
            

        </>
    );

}
