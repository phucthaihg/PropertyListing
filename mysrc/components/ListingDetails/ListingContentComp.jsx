import ListingHilightComp from "./ListingHilightComp";
import ListingDescriptionComp from "./ListingDescriptionComp";
import ListingDetailsComp from "./ListingDetailsComp";
import ListingExtraDetailsComp from "./ListingExtraDetailsComp";

const ListingContentComp = ({listing}) => {
    return (
      <>
        <div className="listing_single_description">
          <ListingHilightComp listing={listing} />

          <ListingDescriptionComp listing={listing} />
        </div>
        {/* End .listing_single_description */}
  
        <div className="additional_details">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb15">Property Details</h4>
            </div>
            <ListingDetailsComp listing={listing} />
          </div>
        </div>
        {/* End .additional_details */}
  
        <div className="additional_details">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb15">Additional details</h4>
            </div>
            <ListingExtraDetailsComp listing={listing} />
          </div>
        </div>
        {/* End .additional_details */}
  
        
      </>
    );
  };
  
  export default ListingContentComp;