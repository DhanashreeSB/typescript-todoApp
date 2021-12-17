import React from 'react';
import { createRootStore } from '../../stores/RootStore';

export const storeContext = React.createContext(null);

export const StoreProvider: React.FC = ({children}) => {
    const store = createRootStore();

    return (
        /* @ts-ignore */
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
    )
}