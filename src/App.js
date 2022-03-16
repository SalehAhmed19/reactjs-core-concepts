import logo from './logo.svg';
import './App.css';

function App() {
  const languages = ['HTML', 'CSS', 'JS', 'ES-6', 'DOM', 'TypeScript', 'Python'];
  return (
    <div className="App">
      {
        languages.map(language => 
          <Person heading={language} des = ''></Person>
        )
      }
      {/* <Person heding = {languages} des = 'Hurray! I can mak a website using HTML'></Person> */}
    </div>
  );
}
function Person(props) {
  return (
    <>
      <div className="container">
        <h1> {props.heading}</h1 >
        <p>{props.des}</p>
      </div>
    </>
  )
}

export default App;
