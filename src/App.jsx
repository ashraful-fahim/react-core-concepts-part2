import Counter from './Counter'
;import Batsman from './Batsman';
import './App.css'

function App() {
  function handleClick() {
    alert('I am clicked!')
  }

  //most used way of event handling
  const handleClick3 = () => alert('Clicked 3!')

  //ways to call a function with a parameter.
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <button onClick={handleClick3}>Click me 3</button>
      <br />
      <br />
      <button onClick={() => handleAdd5(10)}>Click me 5</button>
    </>
  )
}

export default App
