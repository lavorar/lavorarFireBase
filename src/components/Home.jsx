import {useContext} from 'react'
import {useAuth} from '../context/authContext'

export  function Home() {
  //const authContext = useAuth()
  //const authContext = useContext(context)
  const {user} = useAuth();
  console.log(user)
  return (
    <div>

      <h1>home</h1>
    </div>
  )
}
