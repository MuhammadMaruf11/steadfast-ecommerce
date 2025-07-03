import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
}

const getInitialCartItems = (): CartItem[] => {
    if (typeof window !== "undefined") {
        const stored = localStorage.getItem("cartItems");
        if (stored) return JSON.parse(stored);
    }
    return [];
};

const initialState: CartState = {
    items: getInitialCartItems(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existing = state.items.find((item) => item.id === action.payload.id);
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) item.quantity = action.payload.quantity;
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeAllCart(state) {
            state.items = []
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        }
    },
});

export const { addToCart, removeFromCart, updateQuantity, removeAllCart } = cartSlice.actions;
export default cartSlice.reducer;
