import '../styles/App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='content'>
        <div className='contentTitleDiv'>
          <h1>SHOP</h1>
        </div>
        <div className='contentProductsDiv'>
          <h1>clothing</h1>
          <h1>jewelry</h1>
          <h1>electronics</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
