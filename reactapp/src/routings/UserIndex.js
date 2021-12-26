import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AddForm from './AddForm';
import FindForm from './FindForm';
import UserList from './UserList';


//import TopPage from '~/components/pages/TopPage';

const UserIndex = () => (
  <BrowserRouter>
    <Link to="/">一覧ページ</Link>
    <Link to="/create">作成ページ</Link>

    <Switch>
      <Route path="/" exact title="トップ" component={UserList} />
      <Route path="/create" title="ユーザー作成" component={AddForm} />
    </Switch>
  </BrowserRouter>
);

export default UserIndex;
