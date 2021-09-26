import React from 'react'
import Auth from '../../components/Auth/Auth'
import Backdrop from '../../components/Backdrop/Backdrop'
import BuildControls from '../../components/BuildControls/BuildControls'
import Burger from "../../components/Burger/Burger"
import Modal from '../../components/Modal/Modal'
import OrderCard from '../../components/Order/OrderCard'
import UserDetailsForm from '../../components/UserDetails/UserDetailsForm'

function BurgerBuilder() {
    return (
        <div>
            <Burger />
            <BuildControls />
            <UserDetailsForm />
            {/* <Backdrop /> */}
            <Modal />
            <OrderCard />
            <OrderCard />
            <Auth />

        </div>
    )
}

export default BurgerBuilder
