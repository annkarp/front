import { useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import {createTask, getAllTasks} from '../../../services/tasks';
import { getAllUsers } from '../../../services/users';

export function CreateTask({show, handleClose, setTasks}) {
  const [description, setDescription] = useState('');
  const [workers, setWorkers] = useState([]);
  const [assignee, setAssignee] = useState('');
  const [assigneeName, setAssigneeName] = useState('');

  useEffect(() => {
    getAllUsers({ role: 'worker' })
      .then((data) => setWorkers(data))
  }, []);

  const handleSelect = (eventKey, {target: { id }}) => {
    setAssignee(id)
    setAssigneeName(eventKey)
  }

  const handleSubmit = () => {
    createTask({ description, id: assignee })
      .then(() => getAllTasks()
        .then((data) => {
          !data.errors && setTasks(data)
          handleClose(false);
        })
      );
  }

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              onChange={({target: {value}}) => setDescription(value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Assignee</Form.Label>
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {assigneeName || 'Select popug'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {workers.map(worker => (
                  <Dropdown.Item eventKey={worker.username} id={worker.public_id} key={worker.public_id}>
                    {worker.username}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
