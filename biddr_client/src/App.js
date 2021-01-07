
import { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import AuctionNewPage from './components/NewAuctionPage'
import { render } from 'react-dom';
import './App.css';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import FormForBid from './components/BidNewForm';
import { Session }from './FetchRequests'
import SignInPage from './components/SignInPage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  
  

    componentDidMount() {
      Session.currentUser()
        .then(user => {
          this.setState((state) => {
            return {
              user: user
            }
          })
        })
      }
      handleSubmit(params) {
       
        Session.create(params)
        .then(() => {
          return Session.currentUser()
        })
        .then(user => {
        
          this.setState((state) => {
            return {
              user: user
            }
          })
        })
      }
  

    
    
  
    
    render(){
      return(
        <div>
         <BrowserRouter>
         <NavBar currentUser={this.state.user} />
         <Switch>
           <Route exact path='/auctions' component= { AuctionIndexPage} />

         <Route exact path='/auctions/new' component={ AuctionNewPage }>
          

         </Route>
         <Route path='/auctions/:id' component= { AuctionShowPage }> 
         </Route>
         <Route path='/sign_in' render={(routeProps) => <SignInPage handleSubmit={this.handleSubmit}{...routeProps}/>}></Route>
         
         </Switch>
         </BrowserRouter>
        </div>
      )
    }


    
}
    
    

export default App;
