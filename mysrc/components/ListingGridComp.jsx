import ListingCardComp from './ListingCardComp';

function ListingGridComp({listings}) {
    const listingsArray = Array.isArray(listings) ? listings : Array.from(listings);

    return (
        <section id="feature-property" className="feature-property bgc-f7">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="main-title text-center mb40">
                            <h2>Featured Properties</h2>
                            <p>Handpicked properties by our team.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="feature_property_slider gutter-x15">
                            {listingsArray.map((listing) => (
                                <ListingCardComp listing={listing} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingGridComp;
