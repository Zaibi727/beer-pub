import React from 'react';
import './TopNav.css';
import {NavLink} from 'react-router-dom';

class TopNav extends React.Component {
    render() { 
        return ( 
            <div className="TopNav">
                <section className="TopNav-section-one">
                    <h3>Edit business account</h3>
                    <div className="icon-div">
                        <a><i class="fa fa-comment fa-lg"></i></a>
                        <a><i class="fa fa-bell fa-lg"></i></a>
                    </div>
                </section>
                <section className="TopNav-section-two">
                    <ul>
                        <NavLink className="Link" to="/detials" activeClassName="active">
                            <li><a>Detials</a></li>
                        </NavLink>
                        <NavLink className="Link" to="/team" activeClassName="active">
                            <li><a>Team</a></li>
                        </NavLink>
                        <NavLink className="Link" to="/plans" activeClassName="active">
                            <li><a>Plans</a></li>
                        </NavLink>
                        <NavLink className="Link" to="/accounting" activeClassName="active">
                            <li><a>Accounting</a></li>
                        </NavLink>
                    </ul>
                </section>
            </div>
         );
    }
}
 
export default TopNav;