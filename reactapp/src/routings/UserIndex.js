import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddForm from './AddForm';
import FindForm from './FindForm';
import UserList from './UserList';


//import TopPage from '~/components/pages/TopPage';

const UserIndex = () => (
  <BrowserRouter>
    <AddForm />
    <FindForm />
    <UserList />
  </BrowserRouter>
);

export default UserIndex;
