import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Login from './components/Login';
import Card from './components/Card';
import Accordion from './components/Accordion';
import TodoApp from './todo/TodoApp';

function App() {
  const user1 = { name: 'Alice', email: 'alice@mail.com' };
  const user2 = { name: 'Bob', email: 'bob@mail.com' };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Lab 3 Exercises</h1>

      <Card title="User Profiles">
        <UserProfile userData={user1} theme="light" />
        <UserProfile userData={user2} theme="dark" />
      </Card>

      <Card title="Counter">
        <Counter />
      </Card>

      <Card title="Login Form">
        <Login />
      </Card>

      <Card title="Accordion Example">
        <Accordion />
      </Card>

      <Card title="Capstone: To-Do List">
        <TodoApp />
      </Card>
    </div>
  );
}

export default App;
