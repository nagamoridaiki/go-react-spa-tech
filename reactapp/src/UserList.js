import axios from 'axios';
import {useState} from 'react';
import FetchUser from './FetchUser'


function UserList() {

    return (
        <div>
          <h5 className="my-3">これはUserList.jsです。</h5>
          <div className="alert alert-primary pb-0">
          <FetchUser/>
          </div>
        </div>
    )
  }
  
  export default UserList