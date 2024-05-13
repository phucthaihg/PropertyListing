import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListingService from "../services/ListingService"; // Add the missing import statement
import ListingGalleryComp from '../components/ListingDetails/ListingGalleryComp'
import ListingContentComp from "../components/ListingDetails/ListingContentComp";
import SidebarComp from "../components/Sidebar/SidebarComp";
import HeaderComp from "../components/Navbar/HeaderComp";

const listingService = new ListingService(); // Fix the casing of the variable name

function ListingDetailPage() {
  const { listingId } = useParams();

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
  }, [listingId]);


  if (listing !== null) {
    return (
      <>
        {/* <!-- Main Header Nav --> */}
        <HeaderComp />
        <div>
          <h1>Listing Detail Page</h1>

          {/* <!-- Listing Single Property --> */}
          < section className="listing-title-area mt85 md-mt0">
            <div className="container">
              <ListingGalleryComp listing={listing} />
            </div>
          </section>

          {/* <!-- Agent Single Grid View --> */}
          <section className="our-agent-single bgc-f7 pb30-991">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <ListingContentComp listing={listing} />
                </div>
                {/* End details content .col-lg-8 */}


                <div className="col-lg-4 col-xl-4">
                  <SidebarComp listing={listing} />
                </div>
                {/* End sidebar content .col-lg-4 */}
              </div>
              {/* End .row */}
            </div>
          </section>

        </div >
      </>
    );
  } else {
    return (
      <div>
        <h1>Listing Detail Page</h1>
      </div>
    );
  }
} // Add this closing curly brace

export default ListingDetailPage;