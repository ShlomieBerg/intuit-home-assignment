"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiniteStateMachine = exports.FSMError = void 0;
const globals_1 = require("./globals");
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
        this._id = id;
        this._state = initialState;
        this._transitions = transitions;
        globals_1.FSM_MACHINES[id] = this;
    }
    static getInstance(options) {
        const { id } = options;
        if (id in globals_1.FSM_MACHINES) {
            return globals_1.FSM_MACHINES[id];
        }
        return new FiniteStateMachine(options);
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
        const newState = this._transitions[this._state][actionName];
        if (newState) {
            this.state = newState;
        }
        else {
            throw new FSMError(`Action name: ${actionName} does not exists.`);
        }
    }
}
exports.FiniteStateMachine = FiniteStateMachine;
