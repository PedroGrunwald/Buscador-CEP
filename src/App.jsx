import { FiSearch } from "ract-icons/fi";
import "./styles/style.css"


function App() {
  return (
    <div className="container">
      <h1 className="title">buscador cep</h1>

      <div className="containerInput">
        <input type="text" placeholder="digite seu cep..." />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
      <main className="main">
        <h2>CEP: 797979797</h2>
        <span>rua teste</span>
        <span>rua teste 292</span>
        <span>bairro teste</span>
        <span>cidade teste</span>
      </main>
    </div>
  );
}

export default App;
