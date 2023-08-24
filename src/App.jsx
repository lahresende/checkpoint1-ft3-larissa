import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';

function App() {
  const [cores, setCores] = useState([]);
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [erro, setErro] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && codigo) {
      setErro(false);
      setCores([...cores, { nome: nome, codigo: codigo }]);
      setNome('');
      setCodigo('');
    } else {
      setErro(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>ADICIONAR NOVA COR</h3>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <div className="submitButton">
          <button type="submit">Adicionar</button>
        </div>
      </form>
      {erro && (
        <p className="erro">
          Por favor, verifique os dados inseridos no formulário
        </p>
      )}
      <CardList cores={cores} />
    </div>
  );
}

export default App;
