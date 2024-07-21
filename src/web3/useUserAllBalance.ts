import { createStore } from './store';

type ValInfo = {
        address: string
        logo: string,
        name: string,
        fee: number,
}
     


export const [useUserAllBalance] = createStore({
        all_delegation: "",
        all_rewards: "",
        balance: ""
});

const defaultState: Array<ValInfo> = [];

export const [useAllValidators] = createStore(defaultState);
