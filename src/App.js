import logo from './logo.svg';
import './App.css';

function App() {
  const element = <h1>Hello, World!</h1>;
  const user = {
    firstname : "Mona",
    lastname : "Shah"
  };
  const formatUser = (user) => {
    return user.firstname + " " + user.lastname;
  }
  return (
    <div>
      <div>
        {element}
        {formatUser(user)}
      </div>
    </div>
  );
}

export default App;
