
import './App.css'

function App() {

  return (


    <div className="App">

      <h1>Cadastro de Usuários</h1>

      <form>
        <input
         placeholder='Nome'
         type='text' 
        />


        <input
         placeholder='Email' 
         type='email'
         />


        <input 
        placeholder='Idade' 
        type='number'
        />

        <button type='submit'> Cadastrar</button>

      </form>

      <div>
      <p>Usuários Cadastrados  Aqui</p>

      </div>

    </div>

  )
}

export default App
