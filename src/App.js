import './App.css';
import Fruitlist from './fruitlist';
import Moveitem from './MoveItem';
import Productlist from './Productlist';
import Usernamelist from './Usernamelist';

function App() {
  return (
    <div className="App">
      <h2>Task 01</h2>
      <p>Q1. Create a list of fruits and print it using map.</p>
      <Fruitlist/>
      <hr />
       <h2>Task 2</h2>
       <p>Q2. Make a Products Table which should work as:  1. Fill form and submit values. 2. Product should add in product list and display in list below add product form.</p>
       <Productlist/>
       <h2>Task 03</h2>
       <p>Q3. Move items between two groups as shown in attachment.</p>
       <Moveitem/>
       <hr />
       <h2>Task 04</h2>
       <p>Q4. Using class components create a username list as shown.</p>
       <Usernamelist/>
    </div>
  );
}

export default App;
