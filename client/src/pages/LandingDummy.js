import React, { Component } from 'react';
import LoginRegisterModal from '../components/LoginRegisterModal/LoginRegisterModal';


class LandingDummy extends Component {
    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        return (
            <div>
                <button className="modal_opener btn btn-success" onClick={this.toggleModal}>
                    Click Me!
                </button>

                <LoginRegisterModal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    customClass="custom_modal_class"
                />
            </div>
        );
    }
}

export default LandingDummy;