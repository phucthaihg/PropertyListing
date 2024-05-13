const ListingExtraDetailsComp = ({ listing }) => {
    return (
        <>
        <div className="col-md-6 col-lg-6">
          <ul className="list-inline-item">
            <li>
              <p>
                Last remodel year : <span>1987</span>
              </p>
            </li>
            <li>
              <p>
                Amenities : <span>{listing.amenities}</span>
              </p>
            </li>
          </ul>
        </div>
      </>
    );
}

export default ListingExtraDetailsComp;