import React from 'react';

import {
    Page,
    LoginScreen,
    LoginScreenTitle,
    ListInput,
    BlockFooter,
    List,
    ListItem,
    ListButton,
    Button,
    Popup,
    Navbar,
    NavRight,
    NavLeft,
    NavTitle,
    Link,
    Block,
    Row,
    Col,
    View
  } from 'framework7-react';


export default class extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        email: '',
        isLoggedIn: false,


      };
    }
    

   // gmail signin
   signIn() {

 
        
        // auth.signInWithPopup(provider)
        // .then((auth) => {
            
        //   if (auth) {
        //     console.log(auth)
        //     const self = this;
        //     const app = self.$f7;
        //     const router = self.$f7router;
        //     app.dialog.alert(`Name: ${auth.user.displayName}<br><br>Email: ${auth.user.email}`, ()=> {
        //       router.navigate('/dashboard/')
        //     });
        //     this.setState({
        //       name: auth.user.displayName,
        //       email: auth.user.email,
        //       isLoggedIn: true,
        //     })
            
        //   }
            
        // })
        // .catch(error => alert(error.message))
    
  }


    render() {


          return (
            <Page noToolbar noNavbar noSwipeback loginScreen>
                <Row>
                    <Col >
                        <img className="loginlogo"  alt="logo" />
                    </Col>
                </Row>
              <LoginScreenTitle>Non-Veg Bucket</LoginScreenTitle>
                <br />
                <List>
                  {/* <ListButton onClick={this.signIn.bind(this)}>gmail sign in</ListButton> */}
                  <Button fill onClick={
                    this.signIn.bind(this)
                    }>Sign In using gmail</Button>
                  <br />
                  <BlockFooter>Some text about login information</BlockFooter>
                </List>
            
                <br />
              <BlockFooter>&copy; 2020 nonvegbucket.com</BlockFooter>
            </Page>
          )

  }}