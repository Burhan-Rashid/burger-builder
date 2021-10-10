import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderCard from '../../components/Order/OrderCard'
import { fetchOrders } from '../../store/actions/OrderActions'

function Orders() {

    const orders = useSelector(state => state.order.orders)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchOrders());
    }, [])
    console.log(orders)
    return (
        <div>
            {orders.length > 0 ? orders.map((order) => {
                return <OrderCard order={order} />
            }) :
                <p>There are no orders available!</p>}
        </div>
    )
}

export default Orders
