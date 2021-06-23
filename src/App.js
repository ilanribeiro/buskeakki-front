import Routes from './routes';
import Provider from './context/Provider';
import './App.css';

const App = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
