import {useState} from 'react';
import {Navbar} from '@/components/Navbar';
import {Container} from '@/components/UI/Container';
import {Outlet} from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}

export default App;
