import { Tabs, Tab, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AllTasks } from '../AllTasks';
import { MyTasks } from '../MyTasks'
import { removeUser, getUser } from '../../storage'
import './index.css';

export function Dashboard() {
  const navigate = useNavigate();
  const { role } = getUser()

  const logout = () => {
    removeUser()
    navigate('/login')
  }

  return (
    <div className="Dashboard">
      <Button className="Dashboard-button" variant="link" onClick={logout}>Log out</Button>
      <Tabs defaultActiveKey="1" id="tasks-tabs">
        <Tab eventKey="1" title="All tasks">
          <AllTasks />
        </Tab>
        {role !== "admin" &&
          <Tab eventKey="2" title="My tasks">
            <MyTasks />
          </Tab>
        }
      </Tabs>
    </div>
  );
}
