import { Button, Form, Modal, Dropdown} from "semantic-ui-react";
import { useState } from "react";
import _ from 'lodash'

function FormComponent() {
  const [open, setOpen] = useState(false);
  const getDayOptions = (number) =>
  _.times(number, (index) => ({
    key: index,
    text: index +1,
    value: index,
  }))

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Event</Button>}
    >
      <Modal.Header>Add a New Event</Modal.Header>
      <Modal.Content>
      <Form size="mini">
        <Form.Group>
          <Form.Input label="First name" placeholder="event" width={4} />
          <Form.Input label="Description" placeholder="add description" width={6} />
        </Form.Group>
            {/* <Dropdown placeholder="choose month" scrolling options={getOptions(7, '')}/> */}
            <Dropdown placeholder="choose day" scrolling options={getDayOptions(31, '')}/>
            {/* <Dropdown placeholder="choose year" scrolling options={getOptions(2025, '')}/> */}
      </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Save Event"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default FormComponent;
