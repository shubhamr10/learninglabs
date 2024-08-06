import "./search-box.style.css";

const SearchBox = ({ onSearchChange, placeholder, className }) => {
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