import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

const ProfileMenu = ({ anchorEl, handleClick, handleClose }) => {

  const { userDispatch } = useAuth();
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('meShare')
    userDispatch({ type: 'LOGOUT_SUCCESS' })
    history.push('/login')
  }

  return (

    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>ChangePassword</MenuItem>
        <MenuItem onClick={()=>{handleClose(); logout()} }>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu