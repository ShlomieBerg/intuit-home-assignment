import { Form } from 'semantic-ui-react';

const PersonalInformation = () => {
  return <Form>
      <Form.Input label='First name' placeholder='First Name' />
      <Form.Input label='Middle Name' placeholder='Middle Name' />
      <Form.Input label='Last Name' placeholder='Last Name'/>
  </Form>
}

export default PersonalInformation;