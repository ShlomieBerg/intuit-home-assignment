type StateActions = {
    [transition: string]: string;
};
type Transitions = {
    [state: string]: StateActions;
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
    private constructor();
    static getInstance(options: FiniteStateMachineArgs): FiniteStateMachine;
    get id(): string;
    get state(): string;
    set state(state: string);
    dispatch(actionName: string): void;
}
export {};
