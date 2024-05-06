class ListingDto {
    constructor(listing) {
        this.id = listing.id;
        this.title = listing.title;
        this.description = listing.description;
        this.price = listing.price;
        this.listingTags = listing.listingTags;
        this.listingType = listing.listingType;
        this.address = listing.address;
        this.status = listing.status;
        this.beds = listing.beds;
        this.baths = listing.baths;
        this.garages = listing.garages;
        this.sqFt = listing.sqFt;
        this.agentId = listing.agentId;
        this.photos = listing.photos;
        this.videos = listing.videos;
        this.attachments = listing.attachments;
        this.yearBuilt = listing.yearBuilt;
        this.amenities = listing.amenities;
        this.createdAt = listing.createdAt;
        this.lastModifiedAt = listing.lastModifiedAt;
    }

};

export default ListingDto;