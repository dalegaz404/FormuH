import React from 'react';
import ReactDOM from 'react-dom'; // Agrega esta línea
import Formulario from './components/formulario';
import data from './data.json';

function App() {
  const root = document.getElementById('root');
  const rootElement = ReactDOM.createRoot(root);

  return (
    rootElement.render(
      <div className="flex justify-center items-center h-screen">
        <Formulario items={data.items} />
      </div>
    )
  );
}

export default App;

