import { FSM } from ".";

// Saves FSM machines by ID.
const FSM_MACHINES = {};


/* ===== Types ===== */
type Action = () => void;

type StateActions = { 
    [key:string]: Action;
};

type Transitions = {
    [key: string]: StateActions;
}

type FiniteStateMachineArgs = {
    id: string;
    initialState: string;
    transitions: Transitions
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

    constructor({id, initialState, transitions}: FiniteStateMachineArgs) {
        if (id in FSM_MACHINES) {
            return this.getInstance(id);
        }
        this._id = id;
        this._state = initialState;
        this._transitions = transitions; 
        FSM_MACHINES[id] = this;
    }

    getInstance(id: string): FiniteStateMachine {
        if (id in FSM_MACHINES) {
            return FSM_MACHINES[id];
        } 
        throw new FSMError(`Machine with id: ${id} doesn't exists.`)
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
        const action = this._transitions[this._state][actionName];
        if (action) {
            action.call(this);
        } else {
            throw new FSMError(`Action name: ${actionName} does not exists.`);
        }
    }
}