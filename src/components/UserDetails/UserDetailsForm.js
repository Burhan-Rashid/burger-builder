import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { placeOrder } from '../../store/actions/OrderActions';
import Button from '../UI/Button/Button'
import "./UserDetailsForm.css"

function UserDetailsForm() {

    const [name, setName] = React.useState({ value: "", valid: true });
    const [email, setEmail] = React.useState({ value: "", valid: true });
    const [address, setAddress] = React.useState({ value: "", valid: true });
    const [city, setCity] = React.useState({ value: "", valid: true });
    const [phone, setPhone] = React.useState({ value: "", valid: true });
    const [deliveryType, setDeliveryType] = React.useState({ value: "", valid: true });
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const error = useSelector(state => state.order.error);
    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const price = useSelector(state => state.burgerBuilder.price);

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            name: name.value,
            email: email.value,
            address: address.value,
            city: city.value,
            phone: phone.value,
            deliveryType: deliveryType.value,
            ingredients: ingredients,
            price: price,
            orderTime: new Date().toISOString()

        }
        //console.log(new Date().toISOString());
        dispatch(placeOrder(order, token));
        < Redirect to="/orders" />
    }

    React.useEffect(() => {
        if (error)
            alert("something went wrong")
    }, [error])

    const checkValidity = (func, value) => {
        let valid = true;
        if (func === setName && value.trim().length < 5) {
            valid = false;
        }
        else if (func === setEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            valid = pattern.test(value);
        }
        else if (func === setPhone) {
            const pattern = /^\d+$/;
            valid = pattern.test(value) && value.length === 10;
        }
        else if (func === setCity && value.trim().length < 5) {
            valid = false;
        }
        else if (func === setAddress && value.trim().length < 5) {
            valid = false;
        }
        return valid;
    }

    const handleChange = (e, func) => {
        let valid = checkValidity(func, e.target.value);
        func({ value: e.target.value, valid: valid });
    }

    return (
        <div className="UserDetailsForm">
            <strong>Enter your Details:</strong>
            <form onSubmit={handleSubmit} className="form">
                <input
                    className={name.valid ? "UserDetailsForm__input" : "UserDetailsForm__input invalid"}
                    type="text"
                    placeholder="Name"
                    required
                    value={name.value}
                    onChange={(e) => handleChange(e, setName)}
                />
                <input
                    className={email.valid ? "UserDetailsForm__input" : "UserDetailsForm__input invalid"}
                    type="email"
                    placeholder="Email"
                    required
                    value={email.value}
                    onChange={(e) => handleChange(e, setEmail)}
                />
                <input
                    className={address.valid ? "UserDetailsForm__input" : "UserDetailsForm__input invalid"}
                    type="text"
                    placeholder="Address"
                    required
                    value={address.value}
                    onChange={(e) => handleChange(e, setAddress)}
                />
                <input className={city.valid ? "UserDetailsForm__input" : "UserDetailsForm__input invalid"}
                    type="text"
                    placeholder="City"
                    required
                    value={city.value}
                    onChange={(e) => handleChange(e, setCity)}
                />
                <input
                    className={phone.valid ? "UserDetailsForm__input" : "UserDetailsForm__input invalid"}
                    type="number"
                    placeholder="Phone Number"
                    required
                    value={phone.value}
                    onChange={(e) => handleChange(e, setPhone)}
                />

                <select onChange={(e) => setDeliveryType({ value: e.target.value, valid: true })}>
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
                        onClick={handleSubmit}
                    >
                        Order Now
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(UserDetailsForm);
