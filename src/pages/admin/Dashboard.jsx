import React, { useContext } from 'react'
import { AdminAuthContext } from '../../context/AdminAuth';

const Dashboard = () => {
  const {logout} = useContext(AdminAuthContext);

  return (
    <div>
      <h1>
        Welcome to Admin Dashboard
      </h1>
      <button 
        onClick={() => logout()}
        className="bg-red-500 rounded-md py-2 text-white">Logout 
      </button>
    </div>
  )
}

export default Dashboard
