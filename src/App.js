import './App.css';
import Header from './components/header.js'
import NavigationApp from './components/navigationapp.js'
import Graphique from './components/graphique.js'
import Router from './router.jsx'


function App() {
  return (
    <>
      <Header></Header>
      <div id='page-container'>
        <NavigationApp></NavigationApp>
        <Router />
      </div>
    </>
  );
}

export default App;
