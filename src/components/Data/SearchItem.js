import React from "react";
//import {getArtistSpotify} from "../../api";

const SearchItem = ({data}) => {

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(e.currentTarget.parentNode.id);
        console.log(e.currentTarget.parentNode.attributes.getNamedItem('data-type').value);
    }

    const handleKeyDown = async (e) => {
        if(e.key === 13) {
            e.preventDefault();
            console.log(e.currentTarget.parentNode.id);
            console.log(e.currentTarget.parentNode.attributes.getNamedItem('data-type').value);
        }
    }

    return (
        <div className="autocomplete-item" role="option" aria-selected="false" onClick={handleClick} onKeyDown={handleKeyDown}>
            {data.images === undefined ? "" : data.images[0] === undefined ? "" :
                <div className="image-ancor"><img className="image" src={data.images[0].url} alt="" /></div>}
            <div className="label">{data.name}</div>

            {data.type === "album" && <span className="type">
                {data.album_type.slice(0, 1).toUpperCase() + data.album_type.slice(1, data.album_type.length) +
                    " by " + data.artists[0].name}</span>}

            {data.type === "artist" && <span className="type">{
                data.type.slice(0, 1).toUpperCase() + data.type.slice(1, data.type.length)}</span>}

            {data.type === "track" && <span className="type">{
                data.type.slice(0, 1).toUpperCase() + data.type.slice(1, data.type.length)}</span>}
        </div>
    );
};

export default SearchItem;