import React, { useState } from 'react';
import Modal from 'react-modal';
import './SideOne.css';

function SideOne () {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpeen, setModalIsOpeen] = useState(false);

        return (
            <div className="SideOne">
                 <section className="SideOne-section">
                     <div className="SideOne-section-div">
                          <ul className="side-one-ul-1">
                              <li><button className="tri-btn"><i id="add-sign" class="fa fa-stumbleupon fa-lg"></i></button></li>
                              <li><button className="tri-btn" onClick={()=> setModalIsOpen(true)}><i id="add-sign" class="fa fa-joomla fa-lg"></i></button></li>
                               
                               <Modal className="modal-1" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                                   <section className="modal-one-section">
                                       <div id="modal-1-div-1" className="modal-one-section-div-1">
                                       
                                          <i class="fa fa-edit"></i>
                                           <a  className="modal-1-text">Edit account</a>
                                       </div>
                                       <div className="modal-one-section-div-2">
                                           <a className="modal-1-text">Available in app</a>
                                           <div>    
                                              <label class="switch">
                                                  <input type="checkbox" />
                                                  <span class="slider round"></span>
                                               </label>
                                           </div>
                                       </div>
                                   </section>
                               </Modal>


                              <li><button className="tri-btn"><i id="add-sign" class="fa fa-user fa-lg"></i></button></li>
                              <li className="sideone-add-btn"><button><i id="add-sign" class="fa fa-plus fa-lg"></i></button></li>
                          </ul>
                          <ul className="sideone-ul-2">
                              <li>
                                 <a  onClick={()=> setModalIsOpeen(true)}>
                                   <p>Me</p>
                                   <img className="profile-img" src="/images/profile.jpg"/>
                                 </a>
                                 <Modal className="modal-2"  isOpen={modalIsOpeen} onRequestClose={()=> setModalIsOpeen(false)}>
                                          <section className="modal-2-section">
                                              <div>
                                                  <a>
                                                     <span><i id="modal-2-icon" class="fa fa-user"></i></span>
                                                      Edit Profile
                                                  </a>
                                              </div>
                                              <div>
                                                  <a>
                                                  <span><i id="modal-2-icon" class="fa fa-cog"></i></span>
                                                      Settings
                                                  </a>
                                              </div>
                                              <a>
                                                  <span><i id="modal-2-icon" class="fa fa-sign-out"></i></span>
                                                   Log out
                                              </a>
                                          </section>   
                                 </Modal>
                              </li>
                              <li><button className="expand-sign"><i class="fa fa-arrows-alt fa-lg"></i></button></li>
                          </ul>
                     </div>                      
                 </section>
            </div>
         );
    }

 
export default SideOne;
