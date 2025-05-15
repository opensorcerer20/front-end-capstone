export const Hightlights = () => {
    return (
        <section className="highlights">
            <div></div>
            <div>
                <div className="header-row">
                    <h1>Specials</h1>
                    <div>
                        <button className="button" style={{ float: "right" }}>
                            Online Menu
                        </button>
                    </div>
                </div>
                <div className="special-row">
                    <div className="special-left">
                        <img src="/images/greeksalad.jpg" alt="Greek Salad" />
                        <div className="special-title">
                            <div className="special-name">Greek Salad</div>
                            <div className="special-price">$12.99</div>
                        </div>
                        <p className="special-description">
                            The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese, garnished
                            with crunchy garlic and rosemary croutons.{" "}
                        </p>
                    </div>
                    <div className="special-center">
                        <img src="/images/bruchetta.svg" alt="Bruchetta" />
                        <div className="special-title">
                            <div className="special-name">Bruchetta</div>
                            <div className="special-price">$5.99</div>
                        </div>
                        <p className="special-description">
                            Our Bruschetta is made from grilled bread that has
                            been smeared with garlic and seasoned with salt and
                            olive oil.
                        </p>
                    </div>
                    <div className="special-right">
                        <img
                            src="/images/lemondesserthighlight.jpeg"
                            alt="Lemon Dessert"
                        />
                        <div className="special-title">
                            <div className="special-name">Lemon Dessert</div>
                            <div className="special-price">$5.00</div>
                        </div>
                        <p className="special-description">
                            This comes straight from grandma's recipe book,
                            every last ingredient has been sourced and is as
                            authentic as can be imagined.
                        </p>
                    </div>
                </div>
                <div className="special-row">
                    <div>
                        <a href="#" className="delivery">
                            Order a Delivery
                        </a>
                    </div>
                    <div>
                        <a href="#" className="delivery">
                            Order a Delivery
                        </a>
                    </div>
                    <div>
                        <a href="#" className="delivery">
                            Order a Delivery
                        </a>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
};
