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

    return (
        <div>
            {orders.length > 0 ? orders.map((order) => {
                return <OrderCard order={order} />
            }) :
                null}

        </div>
    )
}

export default Orders
