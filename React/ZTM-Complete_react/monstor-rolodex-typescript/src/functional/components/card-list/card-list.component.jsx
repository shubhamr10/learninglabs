import "./card-list.style.css";
import Card from "../card/card.component";

const  CardList = (props) => {
    const {monsters} = props;

    return (<div className="card-list">
        {
            monsters.map((monster) => <Card key={monster.id} monster={monster} />)
        }
    </div>)
}

export default CardList;