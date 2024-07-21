import { createStore } from './store';

type VBalance= {
        delegation_balance: number,
        reward_balance: number,
}

const defaultState: VBalance = {
        delegation_balance: 0,
        reward_balance: 0,
};

interface Value {
        value: string
}

const defaultValue: Value = {
        value: ""
}

export interface AmountIn {
        amt: string;
}

const defaultStateAmt: AmountIn = { 
        amt: "", 
};

export const [useAmountIn] = createStore(defaultStateAmt);

export const [useVBalance] = createStore(defaultState);
export const [useValue] = createStore(defaultValue);