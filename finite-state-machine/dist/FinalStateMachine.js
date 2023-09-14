export class ActionError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidActionError";
    }
}
/* ===== Final State Machine ===== */
export class FinalStateMachine {
    constructor(initialState, transitions) {
        this._state = initialState;
        this._transitions = transitions;
    }
    get state() {
        return this._state;
    }
    dispatch(actionName) {
        const action = this.stateActions()[actionName];
        if (action) {
            action.call(this);
        }
        else {
            throw new ActionError("Action name does not exists.");
        }
    }
    stateActions() {
        return this._transitions[this._state];
    }
}
