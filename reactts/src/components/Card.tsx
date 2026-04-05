interface storeCard {
    name: string,
    isSpecial?: boolean,
    price: number
};

function Card({ name, price, isSpecial = false }: storeCard) {
    return (
        <>
            <article>

                <h2>{name}</h2>
                <h2>{isSpecial && <span>⭐</span>}</h2>
                <p>{price}</p>

            </article>
        </>
    );
}

export default Card 