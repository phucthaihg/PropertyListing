import { useEffect } from "react";
import { useState } from "react";
import ListingService from "../services/ListingService";
import ListingGridComp from "../components/ListingGridComp";


function HomePage() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const listingService = new ListingService();
        
        const fetchListings = async () => {
            try {
                const listings = await listingService.getListings();
                setListings(listings);
            } catch (error) {
                console.error(error);
            }
        };

        fetchListings();
    }, []);


  return (
    <div>
      <h1>Home Page</h1>
      <ListingGridComp listings={listings} />
    </div>
  )
}

export default HomePage;