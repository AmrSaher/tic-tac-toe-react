import { useState } from 'react';
import Board from './Board';

export default function App() {
  const [squares, setSquares] = useState([
    '','','','','','','','',''
  ]);
  const [role, setRole] = useState('x');
  const [banner, setBanner] = useState('Role: X');
  
  return (
    <div className="App">
      <h1 className='banner'>{banner}</h1>
      <Board
        role={role}
        setRole={setRole}
        squares={squares}
        setSquares={setSquares}
        setBanner={setBanner}
      />
    </div>
  );
}