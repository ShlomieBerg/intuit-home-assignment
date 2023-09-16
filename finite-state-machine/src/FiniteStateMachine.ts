import { FSM_MACHINES } from "./globals";

/* ===== Types ===== */

type StateActions = { 
    [transition: string]: string;
};

type Transitions = {
    [state: string]: StateActions;
}

type FiniteStateMachineArgs = {
    id: string;
    initialState: string;
    transitions: Transitions;
}

/* ===== Custom errors ===== */
export class FSMError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FSMError";
    }
}

/* ===== Finite State Machine ===== */
export class FiniteStateMachine {
    _id: string;
    _state: string;
    _transitions: Transitions;

    private constructor({id, initialState, transitions}: FiniteStateMachineArgs) {
        this._id = id;
        this._state = initialState;
        this._transitions = transitions; 
        FSM_MACHINES[id] = this;
    }

    static getInstance(options: FiniteStateMachineArgs): FiniteStateMachine {
        const { id } = options;
        if (id in FSM_MACHINES) {
            return FSM_MACHINES[id];
        } 
        return new FiniteStateMachine(options);
    }

    get id(): string {
        return this._id;
    }

    get state(): string {
        return this._state;
    }

    set state(state: string) {
        this._state = state
    }

    dispatch(actionName: string): void {
        const newState = this._transitions[this._state][actionName];
        if (newState) {
            this.state = newState;
        } else {
            throw new FSMError(`Action name: ${actionName} does not exists.`);
        }
    }
}