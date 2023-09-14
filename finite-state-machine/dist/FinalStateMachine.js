"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalStateMachine = exports.ActionError = void 0;
class ActionError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidActionError";
    }
}
exports.ActionError = ActionError;
/* ===== Final State Machine ===== */
class FinalStateMachine {
    constructor(initialState, transitions) {
        this._state = initialState;
        this._transitions = transitions;
    }
    get getMachineState() {
        return this._state;
    }
    set setMachineState(state) {
        this._state = state;
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
exports.FinalStateMachine = FinalStateMachine;