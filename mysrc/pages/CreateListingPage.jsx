
import { useState } from "react";
import CreateLocationComp from "../components/CreateListing/CreateLocationComp";
import CreateListingHeaderComp from "../components/CreateListing/CreateListingHeaderComp";
import CreateListingPhotosComp from "../components/CreateListing/CreateListingPhotosComp";
import HeaderComp from "../components/Navbar/HeaderComp";
import ListingService from "../services/ListingService";
import ListingDto from "../dtos/ListingDto";

const listingService = new ListingService();

const CreateListingPage = () => {
    const [listing, setListing] = useState(new ListingDto({}));

    const handleOnChange = (e) => {
        setListing({ 
            ...listing, 
            [e.target.name]: e.target.value 
        });
    };

    const handleOnAddressChange = (e) => {  
        setListing({        
            ...listing,        
            address: {        
                ...listing.address,        
                [e.target.name]: e.target.value,        
            },        
        });
    }

    // Function to handle adding photos to ListingDto
    const handleAddPhoto = (newPhoto) => {
        setListing({ 
            ...listing, 
            photos: [
                ...listing.photos, 
                newPhoto
            ] 
        });
    };

    // Function to handle removing photos from ListingDto
    const handleRemovePhoto = (index) => {
        setListing({
        ...listing,
        photos: listing.photos.filter((_, i) => i !== index),
        });
    };

    const handleSaveListing = () => {
        console.log("Saving listing:", listing);
        listingService.createListing(listing)
            .then(response => {
                // Handle success
                console.log("Listing created successfully:", response);
            })
            .catch(error => {
                // Handle error
                console.error("Error creating listing:", error);
            });
    };

    return (
        <>
            {/* Main Header Nav */}
            <HeaderComp />

            {console.log("starting:")}
            <div className="col-lg-12 mb10">
                <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Add New Property</h2>
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
                <div className="my_dashboard_review">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="mb30">Create Listing</h3>
                        </div>
                        {console.log("Listing:", listing)}
                        <CreateListingHeaderComp
                            listing={listing}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <div className="my_dashboard_review mt30">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="mb30">Location</h3>
                        </div>
                        {console.log("Listing address:", listing.address)}
                        <CreateLocationComp
                            address={listing.address}
                            onChange={handleOnAddressChange}
                        />
                    </div>
                </div>


                <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                        <h3 className="mb30">Property media</h3>
                    </div>
                    <CreateListingPhotosComp
                        
                    />
                </div>

                <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                        <div className="my_profile_setting_input">
                            <button className="btn btn1 float-start" >Cancel</button>
                            <button className="btn btn2 float-end" onClick={handleSaveListing}>Save</button>
                        </div>
                    </div>
                    {/* End .col */}
                </div>

            </div>
            {/* End .col */}
        </>
    );
};

export default CreateListingPage;