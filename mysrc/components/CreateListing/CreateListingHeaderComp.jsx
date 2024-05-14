import CreateAmenitiesComp from "./CreateAmenitiesComp";
import React, { useState } from "react";

const CreateListingHeaderComp = ({onChange}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [listingType, setListingType] = useState("");
    const [price, setPrice] = useState("");
    const [sqFt, setSqFt] = useState("");
    const [beds, setBeds] = useState("");
    const [baths, setBaths] = useState("");
    const [garages, setGarages] = useState("");
    const [yearBuilt, setYearBuilt] = useState("");
    const [videos, setVideos] = useState("");
    const [amenities, setAmenities] = useState([]);

    const handleInputChange = (e) => {  
        const { name, value } = e.target;
        console.log("name:", name, "value:", value);
        switch(name) {
            case "title":
                setTitle(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "listingType":
                setListingType(value);
                break;
            case "price":
                setPrice(value);
                break;
            case "sqFt":
                setSqFt(value);
                break;
            case "beds":
                setBeds(value);
                break;
            case "baths":
                setBaths(value);
                break;
            case "garages":
                setGarages(value);
                break;
            case "yearBuilt":
                setYearBuilt(value);
                break;
            case "videos":
                setVideos(value);
                break;
            default:
                break;
        }

        onChange({title, description, listingType, price, sqFt, beds, baths, garages, yearBuilt, videos});
    }

    const handleAmenityChange = (newAmenities) => {
        setAmenities(newAmenities);
        onChange({amenities: newAmenities});
    }

    return (
        <>
            <div className="col-lg-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="propertyTitle">Property Title</label>
                    <input  type="text" 
                            className="form-control" 
                            id="title" 
                            name="title"
                            value={title}
                            onChange={handleInputChange}
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
                        value={description}
                        onChange={handleInputChange}
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
                        value={listingType}
                        onChange={handleInputChange}
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
                        value={price}
                        onChange={handleInputChange}
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
                        value={sqFt}
                        onChange={handleInputChange}
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
                                value={beds}
                                onChange={handleInputChange}
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
                                value={baths}
                                onChange={handleInputChange}
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
                                value={garages}
                                onChange={handleInputChange}
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
                                value={yearBuilt}
                                onChange={handleInputChange}
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
                            value={videos}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                {/* End .col */}                

                <div className="col-xl-12">
                    <h4 className="mb10">Amenities</h4>
                </div>

                <CreateAmenitiesComp 
                    onChange={handleAmenityChange}
                />
            </div>
        </>
    );
};

export default CreateListingHeaderComp;
