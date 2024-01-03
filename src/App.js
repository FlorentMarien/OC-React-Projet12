import './App.css';
import Header from './components/header.js'
import NavigationApp from './components/navigationapp.js'
import Graphique from './components/graphique.js'


function App() {
  return (
    <>
      <Header></Header>
      <div>
        <NavigationApp></NavigationApp>
        <Graphique></Graphique>
      </div>
    </>
  );
}

export default App;
