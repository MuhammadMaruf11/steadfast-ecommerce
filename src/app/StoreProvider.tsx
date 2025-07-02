'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';
import type { AppStore } from '@/lib/store/store';

interface StoreProviderProps {
    children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
    // useRef expects the actual store (not RootState)
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = store; // Not a function call — it's the actual store object
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
