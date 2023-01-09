import { useContext } from 'react';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import { routes } from './Routes/Routes';

function App() {
  const { dark, setDark } = useContext(AuthContext);

  useEffect(() => {
    const localMood = JSON.parse(localStorage.getItem("mood"));
    console.log(localMood);
    setDark(localMood);
  },)

  return (
    <div className="App">
      <div className={dark ? "dark" : ""}>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
