import { Segment } from 'semantic-ui-react';


const Welcome = () => {
    return (
    <div style={{ margin: '2em 2em'}}>
        <Segment vertical size="big" circular style={{ width: 500, height: 500 }}>
            <div>
                <h2>Hi, I am Shlomie Berg.</h2>
                <h3 style={{ color: '#365ebf'}}>Senior Frontend engineer Candidate @ Intuit.</h3>
                <p>This website showcase my implementation of a Finite State machine.
                Navigation through the tabs shows the state machine in Action.
                In each tab you will find a few more examples of using the FSM library.
                </p>
                <h4>Thank you.</h4>
            </div>
        </Segment>
    </div>
    )
};

export default Welcome;