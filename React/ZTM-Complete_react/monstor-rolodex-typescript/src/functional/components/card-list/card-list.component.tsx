import "./card-list.style.css";
import Card from "../card/card.component";
import { Monster } from "../../App";

type CardListProps = {
    monsters:Monster[]
}

const  CardList = (props:CardListProps) => {
    const {monsters} = props;

    return (<div className="card-list">
        {
            monsters.map((monster) => <Card key={monster.id} monster={monster} />)
        }
    </div>)
}

export default CardList;