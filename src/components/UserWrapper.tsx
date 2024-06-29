import React from 'react'
import { Outlet } from 'react-router-dom'

const UserWrapper = () => {
  return (
    <div>
      this si userwrapper
      <Outlet />
    </div>
  )
}

export default UserWrapper
