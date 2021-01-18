import './index.sass';
// Compoenentes
import {Tareas,Container} from './components/Todolist';


// Base de datos
import DB from './DB/DB-ToDoS.json'


function App() {
  return (
    <div>
      <Tareas/>
      <Container/>
    </div>
  );
}

export default App;
