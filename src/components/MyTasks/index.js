import { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { getMyTasks, finishMyTask } from "../../services/tasks";
import { getUser } from "../../storage";

export function MyTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const user = getUser();
    user && getMyTasks(user.public_id)
      .then((data) => {
        !data.errors && setTasks(data)
      })
  }, []);

  const handleClick = ({id}) => {
    const user = getUser();
    finishMyTask(id)
      .then(() => user && getMyTasks(user.public_id)
        .then((data) => {
          !data.errors && setTasks(data)
        })
      )
  }

  return (
    <div>
      <h2 className="Dashboard-title">My Tasks</h2>
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
              <Card.Footer>
                <Button variant="primary" onClick={() => handleClick(task)}>
                  Finish Task
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
