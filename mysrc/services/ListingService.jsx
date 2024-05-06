import sampleListings from "../data/sampleListings";
import ListingDto from "../dtos/ListingDto";

class ListingService {
    getListings(filter = {}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let filteredListings = sampleListings;

                //status
                if (filter?.status) {
                    filteredListings = filteredListings.filter((listing) => listing.status === filter.status);
                }

                //min price
                if (filter?.minPrice) {
                    filteredListings = filteredListings.filter((listing) => listing.price >= filter.minPrice);
                }

                //max price
                if (filter?.maxPrice) {
                    filteredListings = filteredListings.filter((listing) => listing.price <= filter.maxPrice);
                }

                resolve(filteredListings.map((listing) => new ListingDto(listing)));
            }, 1000);
        }); // Add a comma here
    }

    getListing(id){
        return new Promise((resolve) => {
            setTimeout(() => {
                const listing = sampleListings.find((listing) => listing.id === id);
                resolve(new ListingDto(listing));
            }, 1000);
        });
    }
}

export default ListingService;