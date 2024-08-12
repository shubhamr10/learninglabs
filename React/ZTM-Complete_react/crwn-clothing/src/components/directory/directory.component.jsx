import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({categories}) => {

    return (
        <div className="directory-container">
            {
                categories.map(({title, id, imageUrl}) => (
                <DirectoryItem key={id} id={id} title={title} imageUrl={imageUrl} />
                ))
            }
        </div>
    )
}

export default Directory