import { FSM } from 'finite-state-machine';
import { useState, useMemo } from 'react';
import { Button } from 'semantic-ui-react';

const ToggleThemeButton = () => {
    const [isActive, setIsActive] = useState(false);
    const machine = useMemo(() => new FSM("light", { "light": { "toggle": toggleTheme }, "dark": { "toggle": toggleTheme } }), []);

    function toggleTheme() {
        const prevTheme = machine.state;
        machine.state = prevTheme === "light" ? "dark" : "light";
        const theme = machine.state;

        document.body.classList.add(`${theme}-mode`);
        document.body.classList.remove(`${prevTheme}-mode`);
    };

    const _onClick = () => {
        machine.dispatch("toggle");
        setIsActive(machine.state === "dark");
    }
      

    return <div style={{ padding: '0 0.5em' }}><Button active={isActive} onClick={_onClick} circular toggle content={machine.state} /></div>
}

export default ToggleThemeButton;