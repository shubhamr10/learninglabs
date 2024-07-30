import React from "react";
import { Link } from "react-router-dom";


const challenges = [
    {
        link:"/coding1",
        name:"Coding 1"
    },
    {
        link:"/coding2",
        name:"Coding 2"
    },
    {
        link:"/coding3",
        name:"Coding 3"
    },
    {
        link:"/coding4",
        name:"Coding 4"
    },
    {
        link:"/coding5",
        name:"Coding 5"
    },
    {
        link:"/coding6",
        name:"Coding 6: Accordian"
    },
];


function Home(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <div>List of examples:</div>
                    <ul className="list-group">
                        {
                            challenges.map((challenge, key) => (
                                <li key={key} className="list-group-item list-group-item-action">
                                    <Link to={challenge.link}>{challenge.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;