import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
// import Contact from "./Components/Contact";
import LoadingScreen from './Components/Loadingscreen';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
   
  
    // Simulate a loading process (e.g., data fetching, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    
    // 2 seconds for demonstration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
      <Navbar/>
<Todo/>
    </div>
      )}
    </div>

  );
}

export default App;
