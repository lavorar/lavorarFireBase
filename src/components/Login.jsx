// componente logion
import {useState} from 'react'


export  function Login() {
const [user, setUser] = useState({
  email:'',
  password:''
})

  return (
    <div>
      Login
      <form>
        <input type='email' name='email' id = 'email'/>
        <input type='password' name='password' id = 'password'/>
      </form>


    </div>
  )
}
