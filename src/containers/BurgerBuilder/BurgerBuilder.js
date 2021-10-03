import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Auth from '../../components/Auth/Auth'
import Backdrop from '../../components/Backdrop/Backdrop'
import BuildControls from '../../components/BuildControls/BuildControls'
import Burger from "../../components/Burger/Burger"
import Modal from '../../components/Modal/Modal'
import Navbar from '../../components/Nav/Navbar'
import OrderCard from '../../components/Order/OrderCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import UserDetailsForm from '../../components/UserDetails/UserDetailsForm'

import "./BurgerBuilder.css"

function BurgerBuilder() {
    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const [showModal, setShowModal] = React.useState(false);

    console.log(showModal);
    return (
        <div className="BurgerBuilder">

            <Burger />
            <BuildControls setShow={setShowModal} />
            <Modal show={showModal} setShow={setShowModal} />

            {/* <UserDetailsForm /> */}

            {/*
            <OrderCard />
            <OrderCard />
            <Auth /> */}
            {/* <Sidebar /> */}

        </div>
    )
}

export default BurgerBuilder
