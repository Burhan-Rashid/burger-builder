import React from 'react'
import "./UserDetailsForm.css"

function UserDetailsForm() {
    return (
        <div className="UserDetailsForm">
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Street" />
                <input type="text" placeholder="Country" />
                <select >
                    <option value="fastest" label="Fastest"></option>
                    <option value="cheapest" label="Cheapest"></option>
                </select>
            </form>
        </div>
    )
}

export default UserDetailsForm
