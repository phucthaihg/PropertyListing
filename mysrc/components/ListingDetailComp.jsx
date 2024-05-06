function ListingDetailComp({ listing }) {

    console.log(listing);
    if (!listing) {
        console.log(listing);

        const content = (
            <div className="item">
                <div className="feat_property">
                    <div className="thumb">
                        <img

                            className="img-whp w-100 h-100 cover"
                            src={listing.photos[0]}
                            alt="fp1.jpg"
                        />

                        <div className="thmb_cntnt">
                            <ul className="tag mb0">
                                {listing.listingTags.map((val, i) => (
                                    <li className="list-inline-item" key={i}>
                                        <a href="#">{val}</a>
                                    </li>
                                ))}
                            </ul>
                            {/* End .listingTag */}

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
                            <div to={`/listing/${listing.id}`} className="fp_price">
                                ${listing.price}
                                <small>/month</small>
                            </div>
                            {/* End .price */}

                        </div>
                        {/* End .thmb_cntnt */}
                    </div>
                    {/* End .thumb */}

                    <div className="details">
                    </div>
                    {/* End .details */}

                </div>
                {/* End .feat_property */}
            </div>
            // End .item
        ) // Closing parenthesis added here

        return content;

        return (
            <table>
                <tbody>
                    {Object.entries(listing).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
};

export default ListingDetailComp;
