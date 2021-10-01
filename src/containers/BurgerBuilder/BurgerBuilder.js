import React from 'react'
import Auth from '../../components/Auth/Auth'
import Backdrop from '../../components/Backdrop/Backdrop'
import BuildControls from '../../components/BuildControls/BuildControls'
import Burger from "../../components/Burger/Burger"
import Modal from '../../components/Modal/Modal'
import Navbar from '../../components/Nav/Navbar'
import OrderCard from '../../components/Order/OrderCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import UserDetailsForm from '../../components/UserDetails/UserDetailsForm'

function BurgerBuilder() {
    return (
        <div>
            <Navbar />
            <Burger />
            <BuildControls />
            <UserDetailsForm />
            {/* <Backdrop /> */}
            <Modal />
            <OrderCard />
            <OrderCard />
            <Auth />
            {/* <Sidebar /> */}

        </div>
    )
}

export default BurgerBuilder
