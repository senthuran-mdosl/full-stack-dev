import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent(){
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
            ]
        }
    }
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/'} class="left brand-logo">Emaily</Link>
            <ul className="right">
                
            </ul>
            </div>
            </nav>
        );
    }
}

function mapStatetoProps({auth}) {
    return{ auth };

}
export default connect(mapStatetoProps)(Header);