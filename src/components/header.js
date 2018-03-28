import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Button from 'material-ui/Button';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <Link className="header__title" to="/dashboard">
        <h1>Midas</h1>
      </Link>
      <Button onClick={startLogout}>
        Logout
      </Button>
      <button onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);