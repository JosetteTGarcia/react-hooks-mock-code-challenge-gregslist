import React, {useState} from "react";

function ListingCard({listing, onDeleteClick}) {
const {id, image, description, location} = listing
const [isStarred, setIsStarred] = useState(false)

function handleStarClick(){
  setIsStarred(true)
}

function handleDeleteCLick(){
  onDeleteClick(id);
}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick={() => handleStarClick()}>
        {isStarred ? (
          <button className="emoji-button favorite active">★</button> 
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteCLick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
 