import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import CountAgeUseState from './components/CountAgeUseState';
import CountAppUseState from './components/CountAppUseState';
import Register from './components/TwoWayBinding';
import Playlist from './components/Playlist';

// Class Component -> OOP
// Function Component -> Hooks 

// Component = Element (tag)
// Hooks = hàm (có sẵn)

// Naming Convention => Pascal Case

class Paragraph extends React.Component {
  render() {
    return (
      // JSX
      <p>Consequat excepteur tempor ut elit laborum est consequat excepteur sit consequat deserunt. Ex ex anim nisi qui proident sit irure. Nostrud aliquip ex laboris mollit officia. Id irure laboris qui ea enim cupidatat fugiat eu velit sunt ipsum.</p>
    )
  }
}

function Heading() {
  // logic

  // JSX
  return (
    <>
      <h1>Ut fugiat ex eu incididunt sunt occaecat adipisicing nisi fugiat eu commodo officia cupidatat.</h1>
      <Paragraph />
    </>
  )
}

function TextField() {
  return (
    <input className='form-control' />
  )
}


function App() {
  return (
    <div className='container .bg-light.bg-gradient'>
      <div className='listForm'>
        <Playlist />
      </div>
    </div>
  );
}



export default App;
