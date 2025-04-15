import { useEffect, useState } from 'react';
import './styles/App.scss';
import AuthForm from './components/AuthForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (
    <>
      <div className="position-absolute top-0 end-0 p-3 z-3">
        <button className="btn btn-secondary" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <AuthForm />
    </>
  );
}

export default App;

