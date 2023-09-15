type Action = () => void;
type StateActions = {
    [key: string]: Action;
};
type Transitions = {
    [key: string]: StateActions;
};
type FiniteStateMachineArgs = {
    id: string;
    initialState: string;
    transitions: Transitions;
};
export declare class FSMError extends Error {
    constructor(message: string);
}
export declare class FiniteStateMachine {
    _id: string;
    _state: string;
    _transitions: Transitions;
    constructor({ id, initialState, transitions }: FiniteStateMachineArgs);
    getInstance(id: string): FiniteStateMachine;
    get id(): string;
    get state(): string;
    set state(state: string);
    dispatch(actionName: string): void;
}
export {};
