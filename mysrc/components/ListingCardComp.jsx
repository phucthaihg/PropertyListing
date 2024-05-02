const sampleListing = 
  {
    id: 1,
    title: "Luxury Family Home",
    listingTag: ["Featured", "For Sale"],
    price: "530000",
    listingType: "Apartment",
    address: {
		address01: "1421 San Pedro St",
		address02: "",
		city: "Los Angeles",
		state: "CA",
		zipcode: "900015",
		lat: 40.7279707552121,
		long: -74.07152705896405,
	},	
	status: "active",
    beds: "1",
    baths: "1",
    sqFt: "8280",
    agentId: 1,
    photos: [
      "/assets/images/property/2.jpg",
      "/assets/images/property/3.jpg",
      "/assets/images/property/4.jpg",
      "/assets/images/property/5.jpg",
      "/assets/images/property/6.jpg",
      "/assets/images/property/7.jpg",
    ],
	videos: [],
	attachments: [],
    yearBuilt: "2013",
    amenities: [
		"air-conditioning",
		"Wifi",
		"Gym",
	],
    createdAt: 1667181268893,
	lastModifiedAt: 1667181268893,
  }

const ListingCardComp = () => {
  
  return (
    <div className="item" key={sampleListing.id}>
      <div className="feat_property">
        <div className="thumb">
          <img
        
            className="img-whp w-100 h-100 cover"
            src={sampleListing.photos[0]}
            alt="fp1.jpg"
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              {sampleListing.listingTag.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">{val}</a>
                </li>
              ))}
            </ul>
            {/* End .tag */}

            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul>
            {/* End .icon */}

            <Link to={`/listing-details-v1/${sampleListing.id}`} className="fp_price">
              ${sampleListing.price}
              <small>/mo</small>
            </Link>
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{sampleListing.listingType}</p>
            <h4>
              <Link to={`/listing-details-v1/${sampleListing.id}`}>{sampleListing.title}</Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {sampleListing.address}
            </p>

            <ul className="prop_details mb0">
              {/*sampleListing.itemDetails.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">
                    {val.name}: {val.number}
                  </a>
                </li>
              ))*/}
            </ul>
          </div>
          {/* End .tc_content */}

{/*
          <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
                <Link to="/agent-v2">
                  <img
                 
                    src={sampleListing.posterAvatar}
                    alt="pposter1.png"
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/agent-v2">{sampleListing.posterName}</Link>
              </li>
            </ul>
            <div className="fp_pdate float-end">{sampleListing.postedYear}</div>
          </div>
*/}          
          {/* End .fp_footer */}
        </div>
        {/* End .details */}
      </div>
    </div>
  );
};

export default ListingCardComp;
