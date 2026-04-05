import type { Chai } from "../types/type.tsx";
import Card from "./Card";

interface chaiListProps {
    items: Chai[]
};

function ChaiList({ items }: chaiListProps) {
    return (
        <>
            <div>Chai List</div>
            {items.map((Chai) => (
                <Card
                    key={Chai.id}
                    name={Chai.name}
                    price={Chai.price}
                    isSpecial={Chai.isSpecial}
                />
            ))}
        </>
    );
}

export default ChaiList