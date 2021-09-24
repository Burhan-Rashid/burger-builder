import React from 'react'
import BuildControls from '../../components/BuildControls/BuildControls'
import Burger from "../../components/Burger/Burger"

function BurgerBuilder() {
    return (
        <div>
            <Burger />
            <BuildControls />
        </div>
    )
}

export default BurgerBuilder
