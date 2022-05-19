import logo from './logo.svg';
import './App.css';
import './Spinner.css'

import RenderRoutes from 'Routes'

import { StateProvider as OrderProvider } from 'Store/orderStore'

function App() {
  return (
    <div className="App">
      <OrderProvider>
        <RenderRoutes />
      </OrderProvider>
    </div>
  );
}

export default App;
