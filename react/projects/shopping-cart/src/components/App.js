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
          <h2>clothing</h2>
          <h2>jewelry</h2>
          <h2>electronics</h2>
        </div>
      </div>
      <div id="background"></div>
    </div>
  );
}

export default App;
