import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = event => {
    window.alert(JSON.stringify(reservation));
    event.preventDefault();
  }
 
  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={reservation.lastName}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={reservation.email}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Email"
        />
        <input
          name="phone"
          value={reservation.phone}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Phone"
        />
        <input
          name="street"
          value={reservation.street}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Street"
        />
        <input
          name="city"
          value={reservation.city}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="City"
        />
        <input
          name="zip"
          value={reservation.zip}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Zip"
        />
        <input
          name="country"
          value={reservation.country}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Country"
        /><br></br>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;