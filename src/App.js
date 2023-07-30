import { Provider } from 'react-redux';
import './App.css';
import Counter from './Redux/Counter';
import store from './Features/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>

    </div>
  );
}

export default App;
