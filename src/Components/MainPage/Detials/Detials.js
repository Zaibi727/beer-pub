import React,{useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './Detials.css';

function Detials () { 

    const [value, setValue] = useState();

        return ( 
            <div className="Detials">
            <form>
                <section className="Detials-section-one">
                  <div> 
                       <button type="button" className="add-new-pic">
                          <i class="fa fa-plus"></i>
                         <p>Add new<br></br>picture</p>
                       </button>   
                  </div>
                  <div>
                      <img className="add-img" src="/images/one.jpg" />
                  </div>
                  <div>
                      <img className="add-img" src="/images/two.jpg" />
                  </div>
                </section>

                {/*--section-one--*/}
                  
                  <section className="wrapper">
                        <section className="wrapper-section-left">
                             <div>
                                 <h4>Bussiness information</h4>
                                  <div className="label-input-divs-wrapper">
                                       <div>
                                         <label className="label-left">Business logo</label>
                                       </div>
                                        <div className="label-input-divs-wrapper-div-22">
                                          <button type="button" className="logo-upload" ><i class="fa fa-camera"></i></button>
                                          <p>Upload</p>   
                                        </div>                                                               
                                  </div>

                                  <div className="label-input-divs-wrapper">
                                       <div>
                                         <label className="label-left">Location</label>
                                       </div>
                                       <div>
                                         <input id="pure-input" placeholder="Location name" required/> 
                                       </div>                                                
                                  </div>

                                  <div className="label-input-divs-wrapper">
                                      <div>
                                          <label className="label-left">Address</label>
                                      </div>
                                      <div>
                                         <input id="pure-input" placeholder="Sunset boulevard" required/>
                                      </div>                                              
                                  </div>

                                  <div className="label-input-divs-wrapper">
                                       <div>
                                             <label className="label-left">City / State</label>
                                       </div>
                                       <div className="label-input-divs-wrapper-div-2">
                                         <select className="country-dropdown" id="country" name="country">
                                            <option value="Afganistan">Wishnigton</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                        </select>
                                        <select className="country-dropdown" id="country" name="country">
                                            <option value="Afganistan">America</option>
                                            <option value="Albania">Russia</option>
                                            <option value="Algeria">Bejing</option>
                                            <option value="American Samoa">American Samoa</option>
                                         </select>
                                       </div>   
                                  </div>

                                  <div className="label-input-divs-wrapper">
                                      <div>
                                            <label className="label-left">ZIP code / Country</label>
                                      </div>
                                      <div className="label-input-divs-wrapper-div-2">
                                          <select className="country-dropdown" id="country" name="country">
                                            <option value="Afganistan">7324891</option>
                                            <option value="Albania">4575476</option>
                                            <option value="Algeria">8908968</option>
                                            <option value="American Samoa">2345325</option>                                           
                                         </select>
                                         <select className="country-dropdown" id="country" name="country">
                                            <option value="Afganistan">USA</option>
                                            <option value="Albania">UK</option>
                                            <option value="Algeria">France</option>
                                            <option value="American Samoa">American Samoa</option>
                                         </select>
                                      </div>                                     
                                  </div>

                                  <div className="label-input-divs-wrapper">
                                     <div>
                                           <label className="label-left">Phone number</label>
                                     </div>
                                      <div className="yyy">
                                       <PhoneInput
                                          className="int-phone"
                                         international
                                         defaultCountry="US"
                                         value={value}
                                         onChange={setValue}/>
                                      </div>                                    
                                  </div>

                                  <div className="label-input-divs-wrapper">
                                       <div>
                                            <label className="label-left">Email</label>
                                       </div>
                                       <div>
                                           <input id="pure-input" required/>
                                       </div>                        
                                  </div>

                                  <div className="label-input-divs-wrapper">
                                       <div>
                                            <label className="label-left">Website</label>
                                       </div>
                                       <div>
                                           <input id="pure-input" required />
                                       </div>                        
                                  </div>

                             </div>

                             {/*--Business infromation--*/}

                            <div>
                                <h4>Opening times</h4>
                                  <div className="opening-times-sub-wrapper">
                                       <div className="opening-times-sub-wrapper-div-one">
                                           <label for="appt-time"><span className="day-check"><input className="check-boxes" type="checkbox" /></span>Monday</label>
                                       </div>
                                       <div className="opening-times-sub-wrapper-two">
                                           <div className="opening-times-sub-wrapper-time-inputt">
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" /> 
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" /> 
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />      
                                           </div>
                                       </div>
                                    </div>  

                                    <div className="opening-times-sub-wrapper">
                                       <div className="opening-times-sub-wrapper-div-one">
                                           <label for="appt-time"><span className="day-check"><input type="checkbox" /></span>Tuesday</label>
                                       </div>
                                       <div className="opening-times-sub-wrapper-two">
                                           <div className="opening-times-sub-wrapper-time-input">
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />       
                                           </div>
                                       </div>
                                    </div> 

                                    <div className="opening-times-sub-wrapper">
                                       <div className="opening-times-sub-wrapper-div-one">
                                           <label for="appt-time"><span className="day-check"><input type="checkbox" /></span>Wednesday</label>
                                       </div>
                                       <div className="opening-times-sub-wrapper-two">
                                           <div className="opening-times-sub-wrapper-time-input">
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />  
                                           </div>
                                       </div>
                                    </div>  

                                    <div className="opening-times-sub-wrapper">
                                       <div className="opening-times-sub-wrapper-div-one">
                                           <label for="appt-time"><span className="day-check"><input type="checkbox" /></span>Thursday</label>
                                       </div>
                                       <div className="opening-times-sub-wrapper-two">
                                           <div className="opening-times-sub-wrapper-time-input">
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />      
                                           </div>
                                       </div>
                                    </div> 

                                    <div className="opening-times-sub-wrapper">
                                       <div className="opening-times-sub-wrapper-div-one">
                                           <label for="appt-time"><span className="day-check"><input type="checkbox" /></span>Friday</label>
                                       </div>
                                       <div className="opening-times-sub-wrapper-two">
                                           <div className="opening-times-sub-wrapper-time-input">
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" /> 
                              
                                           </div>
                                       </div>
                                    </div> 

                                    <div className="opening-times-sub-wrapper">
                                       <div className="opening-times-sub-wrapper-div-one">
                                           <label for="appt-time"><span className="day-check"><input type="checkbox" /></span>Saturday</label>
                                       </div>
                                       <div className="opening-times-sub-wrapper-two">
                                           <div className="opening-times-sub-wrapper-time-input">
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" /> 
                                           </div>
                                       </div>
                                    </div>  

                                    <div className="opening-times-sub-wrapper">
                                       <div className="opening-times-sub-wrapper-div-one">
                                           <label for="appt-time"><span className="day-check"><input type="checkbox" /></span>Sunday</label>
                                       </div>
                                       <div className="opening-times-sub-wrapper-two">
                                           <div className="opening-times-sub-wrapper-time-input">
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" />
                                              <input type="time" id="appt-time" name="appt-time" min="09:00" max="18:00" /> 
                                           </div>
                                       </div>
                                    </div> 
                            </div>

                        </section>

                        {/*--section-left--*/}

                        <section className="wrapper-section-right">
                            <div>
                                <h4>Extra detials</h4>
                                <div className="wrapper-section-right-divs-sub-wrapper">
                                      <div>
                                          <label>Main category</label>
                                      </div>
                                      <div>
                                           <select className="Main-category" id="Main-category" name="Main-category">
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                          </select>
                                      </div>    
                                </div>

                                <div className="wrapper-section-right-divs-sub-wrapper">
                                      <div>
                                          <label>Main category</label>
                                      </div>
                                      <div>
                                           <select className="Main-category" id="Main-category" name="Main-category">
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                               <option value="Bar">Bar,Cafes & Restaurant</option>
                                          </select>
                                      </div>
                                      
                                </div>

                                <div className="wrapper-section-right-divs-sub-wrapper">
                                     <div>
                                          <label>Description</label>
                                     </div>
                                     <div>
                                          <textarea className="text-area-discrp" placeholder=" add a description" />
                                     </div>
                                </div>

                                <div className="wrapper-section-right-divs-sub-wrapper">
                                        <label>Option on request</label>
                                       <div className="right-sub-wrapper">
                                          <div className="right-sub-wrapper-div-box">
                                               <span><i class="fa fa-pagelines"></i></span>
                                               <span>Vegan</span>
                                               <input type="checkbox" />
                                          </div>
                                          <div className="right-sub-wrapper-div-box">
                                               <span><i class="fa fa-pagelines"></i></span>
                                               <span>Gluten free</span>
                                               <input type="checkbox" />
                                           </div>
                                       </div>  
                                </div>

                                <div className="wrapper-section-right-divs-sub-wrapper">
                                        <label>Option on request</label>
                                       <div className="right-sub-wrapper">
                                          <div className="right-sub-wrapper-div-box">
                                               <span><i class="fa fa-male"></i></span>
                                               <span>Men</span>
                                               <input type="checkbox" />
                                          </div>
                                          <div className="right-sub-wrapper-div-box">
                                               <span><i class="fa fa-female"></i></span>
                                               <span>Women</span>
                                               <input type="checkbox" />
                                           </div>
                                       </div>  
                                </div>

                                <div className="wrapper-section-right-divs-sub-wrapper">
                                        <label>Option on request</label>
                                       <div className="right-sub-wrapper">
                                          <div className="right-sub-wrapper-div-box">
                                               <span><i class="fa fa-user"></i></span>
                                               <span>Casual</span>
                                               <input type="checkbox" />
                                          </div>
                                          <div className="right-sub-wrapper-div-box">
                                               <span><i class="fa fa-female"></i></span>
                                               <span>Elegant</span>
                                               <input type="checkbox" />
                                           </div>
                                       </div>  
                                </div>

                                <div className="wrapper-section-right-divs-sub-wrapper">
                                      <label>Tips / commissions</label>
                                      <div className="tips-commission">
                                           <select className="country-dropdon" id="country" name="country">
                                              <option value="Enabled">Enabled</option>
                                              <option value="Disabled">Disabled</option>    
                                           </select>
                                          <input className="min-amount" type="text" placeholder="Min amount" />
                                      </div>
                                      
                                  </div>

                            </div>

                            {/*---Extra detials--*/}

                            <div>
                                 <h4>Social channels</h4>

                                 <div className="social-channel-div">
                                     <label>Intagram</label>
                                     <input placeholder="Paste link of your page" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>Facebook</label>
                                     <input type="text" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>Google Maps</label>
                                     <input type="text" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>TripAdvisor</label>
                                     <input type="text" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>Yelp</label>
                                     <input type="text" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>Zomato</label>
                                     <input placeholder="Paste link of your page" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>Tiktok</label>
                                     <input placeholder="@" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>IG hashtags</label>
                                     <input type="text"  placeholder="#tag 1, #tag2, #tag3" />
                                 </div>

                                 <div className="social-channel-div">
                                     <label>IG location tag</label>
                                     <input type="text" />
                                 </div>

                            </div>
                        </section>
                      
                  </section>
                  <button className="final-save-btn" type="submit">
                      Save edits
                  </button>
                </form> 
            </div>
         );
    }
 
export default Detials;