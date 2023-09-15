"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiniteStateMachine = exports.ActionError = void 0;
class ActionError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidActionError";
    }
}
exports.ActionError = ActionError;
/* ===== Finite State Machine ===== */
class FiniteStateMachine {
    constructor(initialState, transitions) {
        this._state = initialState;
        this._transitions = transitions;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    dispatch(actionName) {
        const action = this._transitions[this._state][actionName];
        if (action) {
            action.call(this);
        }
        else {
            throw new ActionError(`Action name: ${actionName} does not exists.`);
        }
    }
}
exports.FiniteStateMachine = FiniteStateMachine;