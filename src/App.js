import './App.css';
import { LogoComponent } from './components/LogoComponent';

function App() {
  /* 
    Project Road Map
    1. Week 2
      a. Create a TodoList component 
      b. Create a TodoItem component 
      c. Handle add todo item 
      d. Handle Toggle functionality 
      d. Let user choose the priority of the todo item (low, medium, high, urgent) (H.W)
      e. Handle Delete todo functionality (H.W)

    2. Week 3
      a. Divide todos into 4 columns (low, medium, high, urgent) 
      b. Handle changing todo item's priority 
      c. Handle edit todo text functionality 

    3. Week 4
      b. Search for todo functionality 
      c. Convert the whole project to use React Hooks 🪝
*/
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>
        <LogoComponent />
      </section>
    </main>
  );
}

export default App;
