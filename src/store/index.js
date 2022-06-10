import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user.slice'

export default configureStore({
    reducer: {
        user  //pasamos los state a la store
	}
})

