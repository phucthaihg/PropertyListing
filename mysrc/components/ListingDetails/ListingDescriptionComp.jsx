import React, { useState } from 'react';

const ListingDescriptionComp = ({ listing }) => {

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return (
        <>
            <h4 className="mb30">Description</h4>
            <p className="mb25">
                Evans Tower very high demand corner junior one bedroom plus a large
                balcony boasting full open NYC views. You need to see the views to
                believe them. Mint condition with new hardwood floors. Lots of closets
                plus washer and dryer.
            </p>
            <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
                Fully furnished. Elegantly appointed condominium unit situated on
                premier location. PS6. The wide entry hall leads to a large living room
                with dining area. This expansive 2 bedroom and 2 renovated marble
                bathroom apartment has great windows. Despite the interior views, the
                apartments Southern and Eastern exposures allow for lovely natural light
                to fill every room. The master suite is surrounded by handcrafted
                milkwork and features incredible walk-in closet and storage space.
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <p className="mt10 mb10">
                    The open-concept family room features built-in bookshelves with storage, a cozy fireplace and leads into a spacious kitchen adorned with gas cooktop complete with hood, stained cabinets, stone countertops, a large eat-at island, and modern fixtures, and a bright dining space. The main level also includes a separate living room, a guest bedroom, and a full bathroom, providing versatility and convenience. Upstairs, the primary suite awaits, complete with a private covered deck overlooking the spacious backyard, a luxurious ensuite bathroom with separate his-and-hers vanities, a soaking tub, and an oversized master closet with laundry room access
                    </p>
                    <p className="mt10 mb10">
                    Three additional bedrooms and two bathrooms, along with a loft area, offer ample space for relaxation and entertainment. The third level boasts even more versatility with a sprawling loft space, additional bedroom, and full bathroom, perfect for a media room, teen suite, or play area. Outside, the covered patio and expansive backyard provide the perfect space for outdoor gatherings and activities. Conveniently located near shopping centers, parks, and dining options, this home offers easy access to everything Alpharetta has to offer. Don't miss your chance to experience luxury living in this exquisite home. Schedule your showing today and start creating unforgettable memories tomorrow!
                    </p>
                </div>
            </div>
            <p className="overlay_close">
                <a
                    className="text-thm fz14"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={handleClick}
                >
                    Show More <span className="flaticon-download-1 fz12"></span>
                </a>
            </p>
        </>
    );
}

export default ListingDescriptionComp;