import React, { useState } from 'react';

const CreateAmenitiesComp = ({ onChange }) => {
  const availableAmenities =  ['Wifi', 'Parking', 'Kitchen', 'Washing Machine', 'TV'];
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleAmenityChange = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      selectedAmenities.push(amenity);
      setSelectedAmenities(selectedAmenities);
    }
    
    onChange(selectedAmenities);
  };

  return (
    <>
      {
        availableAmenities.map((amenity) => (
          <div className="col-xxs-6 col-sm col-lg col-xl">
            <ul className="ui_kit_checkbox selectable-list">
              <li>
                <div className="form-check custom-checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={amenity}
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  <label  className="form-check-label" 
                          htmlFor={amenity}>
                    {amenity}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        ))}
    </>
  );
};

export default CreateAmenitiesComp;
