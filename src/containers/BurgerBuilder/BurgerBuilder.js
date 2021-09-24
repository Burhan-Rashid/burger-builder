import React from 'react'
import BuildControls from '../../components/BuildControls/BuildControls'
import Burger from "../../components/Burger/Burger"
import UserDetailsForm from '../../components/UserDetails/UserDetailsForm'

function BurgerBuilder() {
    return (
        <div>
            <Burger />
            <BuildControls />
            <UserDetailsForm />
        </div>
    )
}

export default BurgerBuilder
