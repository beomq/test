import { Link, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const goToSign = () => {
    navigate('/Shop');
  };

  return (
    <div className='App'>
      <button onClick={goToSign}>샵</button>
    </div>
  );
}

export default App;

