import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteClick}) {
// const [listings, setListings] = useState([])
  
// useEffect(() => {
//     fetch(`http://localhost:6001/listings`)
//     .then ((r) => r.json())
//     .then((listings) => setListings(listings))
//   }, [])

//   function handleDeleteClick(id){
//     fetch(`http://localhost:6001/listings/${id}`, {
//       method: "DELETE"
//     })
//     .then((r) => r.json())
//     .then(() => {
//       const updatedItems = listings.filter((listing) => listing.id !== id);
//       setListings(updatedItems)
//     })
//   }

  
 

  return (
    <main>
    <ul className="cards"> 
      {listings.map((listing) => (
    <ListingCard 
    key={listing.id}
    listing={listing}
    onDeleteClick={onDeleteClick}
    />
    ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
 