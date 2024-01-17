
import { configureStore} from "@reduxjs/toolkit"

import todosReducer from "./feature/todoSlice" 

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})