import './App.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const tinyExplodeProps = {
    force: 0.4,
    duration: 2000,
    particleCount: 60,
    floorHeight: 500,
    floorWidth: 300
  }

  const alertar = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setIsExploding(!isExploding)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        setTimeout(() => {
          console.log('hola')
          setIsExploding(false)
        }, 1000);
      }
    })
  }

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <div className={"explosion"}>
        {isExploding && <ConfettiExplosion {...tinyExplodeProps} />}
      </div>
      <button onClick={alertar}>Alert</button>
    </div>
  );
}

export default App;
