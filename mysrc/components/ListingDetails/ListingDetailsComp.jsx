const ListingDetailsComp = ({ listing }) => {   
    return (
        <>
             <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property ID : <span>{listing.id}</span>
            </p>
          </li>
          <li>
            <p>
              Price : <span>${listing.price}</span>
            </p>
          </li>
          <li>
            <p>
              Property Size : <span>{listing.sqFt} Sq Ft</span>
            </p>
          </li>
          <li>
            <p>
              Year Built : <span>{listing.yearBuilt}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span>{listing.beds}</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span>{listing.baths}</span>
            </p>
          </li>
          <li>
            <p>
              Garage : <span>{listing.garages}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span>{listing.listingType}</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>{listing.status}</span>
            </p>
          </li>
        </ul>
      </div>
        </>
    );
}
export default ListingDetailsComp;