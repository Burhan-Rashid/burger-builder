import React from 'react'
import Button from '../UI/Button/Button'
import "./UserDetailsForm.css"

function UserDetailsForm() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [deliveryType, setDeliveryType] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(deliveryType);
    }

    return (
        <div className="UserDetailsForm">
            <strong>Enter your Details:</strong>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                <input type="text" placeholder="City" required value={city} onChange={(e) => setCity(e.target.value)} />
                <input type="number" placeholder="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />

                <select onChange={(e) => setDeliveryType(e.target.value)}>
                    <option default disabled selected>Select Delivery Type</option>
                    <option value="fastest" label="Fastest"></option>
                    <option value="cheapest" label="Cheapest"></option>
                </select>

                <div className="buttons">
                    <Button
                        style={{ width: "30%", backgroundColor: "gray", marginRight: "5px", color: "white" }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        style={{ width: "60%", color: "white" }}
                    >
                        Order Now
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UserDetailsForm
