
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

/* ===== Final State Machine ===== */
export class FinalStateMachine {
    private _state: string;
    private _transitions: Transition;

    constructor(initialState: string, transitions: Transition) {
        this._state = initialState;
        this._transitions = transitions; 
    }

    get getMachineState(): string {
        return this._state;
    }

    set setMachineState(state: string) {
        this._state = state
    }

    dispatch(actionName: string): void {
        const action = this.stateActions()[actionName];
        if (action) {
            action.call(this);
        } else {
            throw new ActionError("Action name does not exists.");
        }
    }

    private stateActions(): StateActions | undefined {
        return this._transitions[this._state];
    }


}