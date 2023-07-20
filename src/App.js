import logo from './logo.svg';
import './App.css';

function App() {
  const element = <h1>Hello, World!</h1>;
  const user = {
    firstname : "Mona",
    lastname : "Shah"
  };
  const getGreetings = (user) => {
    if(user){
      return user.firstname + " " + user.lastname;
    }
    return <h1>Stranger!</h1>;
  }
  return (
    <div>
      <div>
        {element}
        {getGreetings()}
      </div>
    </div>
  );
}

export default App;
