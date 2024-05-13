const CreateLocationComp = ({address, onChange}) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyAddress">Address</label>
          <input  type="text" className="form-control" 
                  id="address01" 
                  name="address01" 
                  value={address.address01} 
                  onChange={onChange}/>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyCity">City</label>
          <input  type="text" className="form-control" 
                  id="city" 
                  name="city" 
                  value={address.city} 
                  onChange={onChange} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyState">State</label>
          <input  type="text" className="form-control" 
                  id="state" 
                  name="state" 
                  value={address.state} 
                  onChange={onChange} />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="zipCode">Zip</label>
          <input  type="text" className="form-control" 
                  id="zipcode" 
                  name="zipcode" 
                  value={address.zipcode} 
                  onChange={onChange} />
        </div>
      </div>
      {/* End .col */}

      
    </>
  );
};

export default CreateLocationComp;
