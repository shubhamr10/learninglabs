import "./search-box.style.css";
import { ChangeEvent } from "react";


// using types for functional component
// type SearchBoxProps = {
//     onSearchChange: ChangeEventHandler<HTMLInputElement>;
//     className: string;
//     placeholder: string;
// }

// for custom handler use raw type for change handler

type SearchBoxProps = {
    className: string;
    placeholder: string;
    onSearchChange: (event : ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ onSearchChange, placeholder, className }:SearchBoxProps) => {
    return (
        <input 
            type="search"
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onSearchChange}

        />
    )
}

export default SearchBox;