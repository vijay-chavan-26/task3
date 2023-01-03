import { combineReducers } from 'redux'
import { handleOperations } from './AdminDashboardReducers'
import { handleCartCount, handleCartTotalAmount } from './CartCountReducer'
import { handleCartOperations } from './CartOperationsReducer'
import { handleOperationId } from './IdOperationReducer'
import { setLogin } from './LoginStatusReducer'

const RootReducer = combineReducers({
    setLogin,
    handleOperationId,
    handleOperations,
    handleCartCount,
    handleCartOperations,
    handleCartTotalAmount
})

export default RootReducer