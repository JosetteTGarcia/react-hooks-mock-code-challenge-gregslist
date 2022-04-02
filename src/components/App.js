import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [search, setSearch] = useState("")
  const [listings, setListings] = useState([])
  
useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then ((r) => r.json())
    .then((listings) => setListings(listings))
  }, [])

  function handleDeleteClick(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      const updatedItems = listings.filter((listing) => listing.id !== id);
      setListings(updatedItems)
    })
  }

  const searchedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="app">
      <Header 
      handleSearch={setSearch}
      search={search}/>
      <ListingsContainer 
      listings={searchedListings}
      onDeleteClick={handleDeleteClick}
      />
  
    </div>
  );
}

export default App;
 

// // const updatedQuestions = questions.filter((q) => q.id !== id);
  //       setQuestions(updatedQuestions);