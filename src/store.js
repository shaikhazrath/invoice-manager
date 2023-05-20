import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './Reducers'
const store  = configureStore({
    reducer:{
        invoice: invoiceReducer
    }
})
export default store