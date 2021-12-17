import React from 'react';
import { storeContext } from '../components/StoreProvider/StoreProvider';
import RootStore from '../stores/RootStore';

export const useStores = (): RootStore => {
    const store = React.useContext(storeContext);
    if (!store) {
        throw new Error('Use useStores in a StoreProvider.');
    }
    return store;
};

export default useStores;