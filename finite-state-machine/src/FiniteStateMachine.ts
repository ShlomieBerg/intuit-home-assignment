
/* ===== Types ===== */
type Action = () => void;

type StateActions = { 
    [key:string]: Action;
};

type Transition = {
    [key: string]: StateActions;
}


export class ActionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidActionError";
    }
}

/* ===== Finite State Machine ===== */
export class FiniteStateMachine {
    _state: string;
    _transitions: Transition;

    constructor(initialState: string, transitions: Transition) {
        this._state = initialState;
        this._transitions = transitions; 
    }

    get state(): string {
        return this._state;
    }

    set state(state: string) {
        this._state = state
    }

    dispatch(actionName: string): void {
        const action = this._transitions[this._state][actionName];
        if (action) {
            action.call(this);
        } else {
            throw new ActionError(`Action name: ${actionName} does not exists.`);
        }
    }
}