import React from 'react'
import Backdrop from '../../components/Backdrop/Backdrop'
import BuildControls from '../../components/BuildControls/BuildControls'
import Burger from "../../components/Burger/Burger"
import Modal from '../../components/Modal/Modal'
import UserDetailsForm from '../../components/UserDetails/UserDetailsForm'

function BurgerBuilder() {
    return (
        <div>
            <Burger />
            <BuildControls />
            <UserDetailsForm />
            {/* <Backdrop /> */}
            <Modal />

        </div>
    )
}

export default BurgerBuilder
