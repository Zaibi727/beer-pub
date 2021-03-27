import React from 'react';
import './SideTwo.css';

class SideTwo  extends React.Component {
    render() { 
        return ( 
            <div className="SideTwo">
                <section className="SideTwo-section">
                    <ul className="SideTwo-section-ul-1">
                        <li><a>
                            <label  for="country"><h4 className="dd-lable">Beer pub</h4></label>
                            <select className="country-dropdownnn" id="country" name="country">                        
                                <option value="Afganistan"> USA, New York</option>
                                <option value="Albania">UK, London</option>
                                <option value="Algeria">France, Paris</option>
                                <option value="American Samoa">Austrila, Sydne</option>
                           </select>
                        </a></li>
                        <li><a><span className="side-two-icon"><i class="fa fa-umbrella fa-lg"></i></span><span className="hidden">Reservations</span></a></li>
                        <li><a><span className="side-two-icon"><i class="fa fa-calendar fa-lg"></i></span><span className="hidden">Projects</span></a></li>
                        <li><a><span className="side-two-icon"><i class="fa fa-photo fa-lg"></i></span><span className="hidden">Media library</span></a></li>
                        <li><a><span className="side-two-icon"><i class="fa fa-users fa-lg"></i></span><span className="hidden">Talents</span></a></li>
                        <li><a><span className="side-two-icon"><i class="fa fa-envelope fa-lg"></i></span><span className="hidden">Message</span></a></li>
                    </ul>
                    <ul className="SideTwo-section-ul-2">
                        <li>
                              <img className="people-profile" src="/images/profile.jpg" />
                              <img className="people-profile" src="/images/profile.jpg" />
                              <img className="people-profile" src="/images/profile.jpg" />
                              <img className="people-profile" src="/images/profile.jpg" />
                              <img className="people-profile" src="/images/profile.jpg" />                   
                        </li>
                        <li>
                            <button className="sidetwo-invite-btn">
                                Invite people
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
         );
    }
}
 
export default SideTwo;