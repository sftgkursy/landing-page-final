import React from 'react'

const App = () => {

  const firstname = "John";
  const nums = 2 + 4;

  return (
    <div>
        <h3>To jest {firstname}</h3>
        <p>Wynik to {nums}</p>
        <p>{2 + 5 * 6}</p>
    </div>
  )
}

export default App