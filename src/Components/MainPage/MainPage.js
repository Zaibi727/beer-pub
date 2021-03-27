import React from 'react';
import './MainPage.css';
import Accounting from './Accounting/Accounting';
import Detials from './Detials/Detials';
import Plans from './Plans/Plans';
import Team from './Team/Team';
import TopNav from './TopNav/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainPage extends React.Component {
    render() { 
        return ( 
            <div className="MainPage">
                <section className="Main-page-section">
                      <Router>
                          <TopNav />
                          <Details />
                          <Switch>
                               <Route path="/accounting" component={Accounting}/>
                               <Route path="/plans" component={Plans}/>
                               <Route path="/team" component={Team}/>
                          </Switch>
                      </Router>
                </section>
            </div>
         );
    }
}
 
export default MainPage;