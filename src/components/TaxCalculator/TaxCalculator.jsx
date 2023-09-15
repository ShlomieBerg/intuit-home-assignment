import { useState, useMemo } from 'react';
import { FSM } from 'finite-state-machine';
import { Step, Button } from 'semantic-ui-react';
import { PersonalInformation, RelationshipStatus, TaxSummary } from './components';

const TaxCalculator = () => {
    const [step, setStep] = useState('1');

    const taxStateMachine = useMemo(() => new FSM('1', {
        '1': { 'next': nextStep},
        '2': { 'next': nextStep, 'prev': prevStep },
        '3': { 'prev':  prevStep}
    }), []);
    
    function nextStep() {
        const currStep = taxStateMachine.state;
        const nextStep = parseInt(currStep) + 1;
        taxStateMachine.state = nextStep + '';
        setStep(taxStateMachine.state);
    }

    function prevStep() {
        const currStep = taxStateMachine.state;
        const nextStep = currStep - 1;
        taxStateMachine.state = nextStep + '';
        setStep(taxStateMachine.state);
    }
    

    return <div style={{ margin: '2em auto 0'  }}>
          <Step.Group ordered>
            <Step completed={step > 1} active={step === '1'}>
              <Step.Content>
                <Step.Title>Personal Information</Step.Title>
              </Step.Content>
            </Step>

            <Step completed={step > 2} active={step === '2'}>
              <Step.Content>
                <Step.Title>Relationship Status</Step.Title>
                <Step.Description>What is your relationship status</Step.Description>
              </Step.Content>
            </Step>

            <Step completed={step === 3}>
              <Step.Content>
                <Step.Title>Summary</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <div style={{ height: '300px'}}>
            {step === '1' && <PersonalInformation />}
            {step === '2' && <RelationshipStatus />}
            {step === '3' && <TaxSummary />}
          </div>
          <div style={{ margin: '50px 0 0 auto'}}>
            <Button content="Back" onClick={() => taxStateMachine.dispatch('prev')} disabled={step === '1'}/>
            <Button content="Next" onClick={() => taxStateMachine.dispatch('next')} disabled={step === '3'}/>
          </div>

        </div>

}

export default TaxCalculator;