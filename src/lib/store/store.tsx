import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/lib/features/cart";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store; 