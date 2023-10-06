import NotCompo from './compenents/NotCompo';
import imge from './imgens/images.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='title'> APRESENTANDO </h1>
      <NotCompo
      titulo="GATOCEGO"
      img={imge}
      alt="GATO PRETO"
      desc="GATO FANTASIADO DE MORCEGO"
      catego="GATOS - CURIOSIDADES - ANIMAIS" 
      />
    </div>
  );
}

export default App;
