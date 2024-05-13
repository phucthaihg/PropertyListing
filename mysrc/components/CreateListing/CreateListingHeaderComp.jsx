import CreateAmenitiesComp from "./CreateAmenitiesComp";

const CreateListingHeaderComp = ({listing, onChange}) => {
    return (
        <>
        {console.log("CreateListingHeaderComp listing:", listing)}
            <div className="col-lg-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="propertyTitle">Property Title</label>
                    <input  type="text" 
                            className="form-control" 
                            id="title" 
                            name="title"
                            value={listing.title}
                            onChange={onChange}
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
                <div className="my_profile_setting_textarea">
                    <label htmlFor="propertyDescription">Description</label>
                    <textarea
                        className="form-control"
                        rows="7"
                        id="description"
                        name="description"
                        value={listing.description}
                        onChange={onChange}
                    ></textarea>
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input ui_kit_select_search form-group">
                    <label>Type</label>
                    <select
                        className="selectpicker form-select"
                        listing-live-search="true"
                        listing-width="100%"
                        id="listingType"
                        name="listingType"
                        value={listing.listingType}
                        onChange={onChange}
                    >
                        <option listing-tokens="type1">Type1</option>
                        <option listing-tokens="Type2">Type2</option>
                        <option listing-tokens="Type3">Type3</option>
                        <option listing-tokens="Type4">Type4</option>
                        <option listing-tokens="Type5">Type5</option>
                    </select>
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-3 col-xl-3">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExamplePrice">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={listing.price}
                        onChange={onChange}
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-3 col-xl-3">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleArea">Sqft</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sqFt"
                        name="sqFt"
                        value={listing.sqFt}
                        onChange={onChange}
                    />
                </div>
            </div>
            {/* End .col */}

        

            <div className="row">                

               
                <div className="col-lg-6 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                        <label htmlFor="bedRooms">Bedrooms</label>
                        <input  type="text" 
                                className="form-control" 
                                id="beds" 
                                name="beds" 
                                value={listing.beds}
                                onChange={onChange}
                        />
                    </div>
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                        <label htmlFor="bathRooms">Bathrooms</label>
                        <input  type="text" 
                                className="form-control"    
                                id="baths" 
                                name="baths" 
                                value={listing.baths}
                                onChange={onChange}
                        />
                    </div>
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                        <label htmlFor="garages">Garages</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                id="garages" 
                                name="garages" 
                                value={listing.garages}
                                onChange={onChange}
                        />
                    </div>
                </div>
                {/* End .col */}
               
                <div className="col-lg-6 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                        <label htmlFor="yearBuild">Year Built</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                id="yearBuild" 
                                value={listing.yearBuilt}
                                onChange={onChange}
                        />
                    </div>
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-xl-4">
                    <div className="my_profile_setting_input form-group">
                        <label htmlFor="videoUrl">Video URL</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="videos" 
                            name="videos" 
                        />
                    </div>
                </div>
                {/* End .col */}                

                <div className="col-xl-12">
                    <h4 className="mb10">Amenities</h4>
                </div>

                <CreateAmenitiesComp 
                    amenities={listing.amenities}
                    onAmenityChange={handleAmenityChange}
                />
                
            </div>
        </>
    );
};

export default CreateListingHeaderComp;
