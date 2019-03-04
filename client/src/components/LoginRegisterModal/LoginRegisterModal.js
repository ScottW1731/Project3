import React from 'react';
import Admin from "../Admin/Admin"
import PropTypes from 'prop-types';

import "./LoginRegisterModal.css";

const LoginRegisterModal = ({ children, customClass, show, closeCallback }) => (
  <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
    <div className="overlay" onClick={closeCallback}></div>
    <div className="modal_content">
      {children}
      <button title="Close" className="close_modal btn btn-danger" onClick={closeCallback}>
        <i className="fas fa-times">X</i>
      </button>
    </div>
  </div>
);

LoginRegisterModal.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func,
};

LoginRegisterModal.defaultProps = {
  children: <Admin />,
  customClass: '',
  show: false,
  closeCallback: () => (false)
};

export default LoginRegisterModal;