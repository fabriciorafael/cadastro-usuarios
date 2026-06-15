import { useState } from 'react'
import UserCard from './UserCard'
import './App.css'

function App() {
  const [name, setName] = useState("Fabricio")
  const [email, setEmail] = useState("bricio@example.com")
  const [age, setAge] = useState("32")
  const [users, setUsers] = useState([])




  function handlesubmit(event) {
    event.preventDefault()

    const newUser = {
      id: Date.now(),
      name,
      email,
      age
    }

    setUsers([...users, newUser])
  }


  return (

    <div className='app'>

      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handlesubmit}>
        <input
          placeholder='Nome'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />


        <input
          placeholder='Email'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />


        <input
          placeholder='Idade'
          type='number'
          value={age}
          onChange={event => setAge(event.target.value)}
        />

        <button type='submit'> Cadastrar</button>

      </form>

      <div className='user-list'>

        {users.map((user) =>(
           <UserCard key={user.id} user={user}/>

        ))}
      

      

      </div>

    </div>

  )
}

export default App
