import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import classes from './Home.module.css';

const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogOut}>Logout</Button>
    </Card>
  );
};

export default Home;
