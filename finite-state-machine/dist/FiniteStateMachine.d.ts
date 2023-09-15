type Action = () => void;
type StateActions = {
    [key: string]: Action;
};
type Transition = {
    [key: string]: StateActions;
};
export declare class ActionError extends Error {
    constructor(message: string);
}
export declare class FiniteStateMachine {
    _state: string;
    _transitions: Transition;
    constructor(initialState: string, transitions: Transition);
    get state(): string;
    set state(state: string);
    dispatch(actionName: string): void;
}
export {};
