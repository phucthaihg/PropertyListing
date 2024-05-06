import { useParams } from "react-router-dom";
import ListingDetailComp from "../components/ListingDetailComp";
import { useEffect, useState } from "react";
import ListingService from "../services/ListingService"; // Add the missing import statement

const listingService = new ListingService(); // Fix the casing of the variable name

function ListingDetailPage() {
    const {listingId} = useParams();
    console.log("Listing ID: ", listingId);

    const [listing, setListing] = useState(null);
    useEffect(() => {    

        const getListing = async () => {
            try {
                const listing = await listingService.getListing(parseInt(listingId, 10));
                setListing(listing);
            } catch (error) {
                console.error(error);
            }
        }      
        getListing();
    },[listingId]);


    return (
      <div>
        <h1>Listing Detail Page</h1>
        {
          console.log("Listing: ", listing)
        }
        <ListingDetailComp listing={listing} />
      </div>
    );
} // Add this closing curly brace

export default ListingDetailPage;