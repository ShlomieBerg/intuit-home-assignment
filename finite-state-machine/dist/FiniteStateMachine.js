"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiniteStateMachine = exports.FSMError = void 0;
// Saves FSM machines by ID.
const FSM_MACHINES = {};
/* ===== Custom errors ===== */
class FSMError extends Error {
    constructor(message) {
        super(message);
        this.name = "FSMError";
    }
}
exports.FSMError = FSMError;
/* ===== Finite State Machine ===== */
class FiniteStateMachine {
    constructor({ id, initialState, transitions }) {
        if (id in FSM_MACHINES) {
            return this.getInstance(id);
        }
        this._id = id;
        this._state = initialState;
        this._transitions = transitions;
        FSM_MACHINES[id] = this;
    }
    getInstance(id) {
        if (id in FSM_MACHINES) {
            return FSM_MACHINES[id];
        }
        throw new FSMError(`Machine with id: ${id} doesn't exists.`);
    }
    get id() {
        return this._id;
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
            throw new FSMError(`Action name: ${actionName} does not exists.`);
        }
    }
}
exports.FiniteStateMachine = FiniteStateMachine;
