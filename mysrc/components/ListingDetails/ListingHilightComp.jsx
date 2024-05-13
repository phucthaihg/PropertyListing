
const ListingHilightComp = ({ listing }) => {
  return (
    <div className="lsd_list">
      <ul className="mb0">
        <li className="list-inline-item">
          <a href="#">{listing.listingType}</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Beds: {listing.beds}</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Baths: {listing.baths}</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Sq Ft: {listing.sqFt}</a>
        </li>
      </ul>
    </div>
  );
}

export default ListingHilightComp;