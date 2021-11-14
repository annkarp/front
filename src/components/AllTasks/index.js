import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { getAllTasks, reassignTasks } from "../../services/tasks";
import { CreateTask } from "../Modals/CreateTask";
import { getUser } from "../../storage";

export function AllTasks() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { role } = getUser()

  useEffect(() => {
    getAllTasks()
      .then((data) => {
        !data.errors && setTasks(data)
      })
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    reassignTasks()
      .then(() => getAllTasks()
        .then((data) => {
          !data.errors && setTasks(data)
        }));
  }

  return (
    <div>
      <div className="Dashboard-buttons">
        <Button onClick={handleShow}>Create Task</Button>
        {role === "admin" && <Button variant="warning" onClick={handleClick}>Reassign Tasks</Button>}
      </div>
      <h2 className="Dashboard-title">All Tasks</h2>
      <Row xs={1} md={3} className="g-4">
        {tasks.map((task) => (
          <Col key={`${task.public_id + Math.random()}`}>
            <Card border="secondary" style={{ width: '18rem' }}>
              <Card.Header>
                {task.status}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {task.jira_id}
                </Card.Text>
                <Card.Text>
                  {task.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                Assigned to {task.username}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <CreateTask show={show} handleClose={handleClose} setTasks={setTasks} />
    </div>
  )
}
