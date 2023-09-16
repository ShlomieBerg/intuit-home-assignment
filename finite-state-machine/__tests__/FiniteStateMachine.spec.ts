import { FSM, FSMError } from "../src";


const switchFSMInput = {
    id: "switchFSM", initialState: "off", transitions: {
        "on": { "switch": "off" },
        "off": { "switch": "on" }
    }
}

describe("Finite State Machine tests", () =>
{
    let switchFSM: FSM;
    beforeAll(() =>
    {
        switchFSM = FSM.getInstance(switchFSMInput);
    });

    test("machine initial state should be off", () =>
    {
        expect(switchFSM.state).toBe("off");
    });

    test("machine get id", () => {
        expect(switchFSM.id).toBe("switchFSM");
    });

    test("machine change state on dispatch", () => {
        switchFSM.dispatch("switch");
        expect(switchFSM.state).toBe("on");
    });

    test("machine trigger dispatch with wrong transitions should throw error", () => {
        expect(() => switchFSM.dispatch("random")).toThrow(FSMError);
        expect(() => switchFSM.dispatch("random")).toThrow("Action name: random does not exists.");
    });

    test("get instance of existing machine", () => {
        const switchFSMInstace = FSM.getInstance(switchFSMInput);
        expect(switchFSMInstace).toBe(switchFSM);
    });
});