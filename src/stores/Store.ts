import { RootStoreI } from "../models/stores.interface";

export default class Store {
    rootStore: RootStoreI;
    constructor(rootStore: RootStoreI) {
        this.rootStore = rootStore;
    }
}