const CreateAmenitiesComp = ({ loaded_amenities, amenities, onAmenityChange }) => {
  return (
    <>
      {
        Object.entries(loaded_amenities).map(([key, value], index) => (
          <div className="col-xxs-6 col-sm col-lg col-xl">
            <ul className="ui_kit_checkbox selectable-list">
              <li>
                <div className="form-check custom-checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheck1"
                  />
                  <label className="form-check-label" htmlFor="customCheck1">
                    BBB
                  </label>
                </div>
              </li>
              {/* End li */}
            </ul>
          </div>
        ))}
    </>
  );
};

export default CreateAmenitiesComp;
