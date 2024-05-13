class ListingDto {
    constructor(listing) {
        this.id = listing.id || null;
        this.title = listing.title || null;
        this.description = listing.description || null;
        this.price = listing.price || null;
        this.listingTags = listing.listingTags || null;
        this.listingType = listing.listingType || null;
        this.address = {
            address01 : listing.address?.address01 || null,
            city :listing.address?.city || null,
            state : listing.address?.state || null,
            zipcode : listing.address?.zipcode || null,
        };
        this.status = listing.status || null;
        this.beds = listing.beds || null;
        this.baths = listing.baths || null;
        this.garages = listing.garages || null;
        this.sqFt = listing.sqFt || null;
        this.agentId = listing.agentId || null;
        this.photos = listing.photos || null;
        this.videos = listing.videos || null;
        this.attachments = listing.attachments || null;
        this.yearBuilt = listing.yearBuilt || null;
        this.amenities = listing.amenities || null;
        this.createdAt = listing.createdAt || null;
        this.lastModifiedAt = listing.lastModifiedAt || null;
    }

};

export default ListingDto;