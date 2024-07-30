import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Accordian.css";

function Accordian(props) {
    const {title, body} = props;
    const [isActive, setActive] = useState(false);
    return (
        <div className="accordian-main" onClick={() => setActive(!isActive)}>
            <div className="title">{title}</div>
            <div className={`body ${isActive ? 'body-active' : ''}`}>{body}</div>
        </div>


    )
}

Accordian.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Accordian
