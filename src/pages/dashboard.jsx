import {
    Page,
    Block,
    Navbar,
    NavLeft,
    NavRight,
    Swiper,
    SwiperSlide,
    SkeletonBlock,
    NavTitle,
    BlockTitle,
    List,
    ListItem,
    Link,
    Card,
    CardContent,
    Icon,
    Row,
    Col,
    ListInput,
    Button
  } from 'framework7-react';
import React from 'react';
import scanlogo from '../assets/images/scanlogo.png';






export default class  extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           addedItemList : [{id:'#1234', itemName:'Chilli Paneer', itemPrice:120, quantity:4, comments:'nospice'}]



        }
    }







      navigateToLink(link){

            this.$f7.views.main.router.navigate(`/${link}/`); 
    }





    render() {

        return (
            <Page name="Dashboard" className="dashboardpage" >

                {/* NavBar  */}
                <Navbar sliding={true}>
                    <NavLeft>
                        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" className="smallbox" color='gray'/>
                        <Link href={`/dashboard/`} className="clearmenupadding">
                            <img className="navbarlogo" src={scanlogo} alt="logo" />
                        </Link>
                    </NavLeft>
                    <NavTitle>Dashboard</NavTitle>
                    <NavRight className="right-with-menu">
                        <Link className="text-color-black" iconF7='person_alt_circle_fill' >&nbsp;Karan Veer Singh&nbsp;&nbsp;<Icon slot="media" size='20' color='black' f7="chevron_down_square"></Icon></Link>
                        <Link className='text-color-gray'>Logout&nbsp;<Icon slot="media" size='20' color='red' f7="chevron_down_square"></Icon></Link>
                        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" className="smallbox" color='gray'/>
                    </NavRight>
                </Navbar>
                
                {/* <Block> */}
                <div className='body'>
                <Row noGap>

                    {/* Screen Left */}
                    <Col width='60'>
                        {/* 1st Row */}
                        <div className="body-menu">
                        <Row noGap>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link>
                            </Col>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                            <Col width='25' >
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/*     <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                        </Row >
                        {/* @nd Row */}
                        <Row noGap>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link>
                            </Col>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                            <Col width='25' >
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                        </Row >
                        {/* 3rd Row */}
                        <Row noGap>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link>
                            </Col>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                            <Col width='25'>
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                            <Col width='25' >
                                <Link className="dashboardlink" onClick={()=>{this.navigateToLink('projects')}} ignoreCache={true}>
                                    <div className="elevation-demo animate-bottom elevation-3 elevation-hover-5 elevation-pressed-5">
                                        {/* <Icon ios="f7:person_2_fill" aurora="f7:person_2_fill" md="material:group" className="dashboard_customer"></Icon> */}
                                        <div>Projects</div>
                                    </div>
                                </Link> 
                            </Col>
                        </Row >
                        </div>
                    </Col>
                    
                    {/* Screen Right */}
                    <Col width='40'>
                        <Row noGap >
                            <Col width='50'>
                                <div className="list  zeromargin no-hairlines-md">
                                    <ul>
                                        <li className="item-content item-input item-input-outline ">

                                        <div className="item-inner">
                                            <div className="item-title item-floating-label">Name</div>
                                            <div className="item-input-wrap">
                                                <input id="autocomplete-dropdown-expand" type="text" placeholder="Your name" />
                                                <span className="input-clear-button"></span>
                                            </div>
                                        </div>
                                        
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col width='30'>
                            <div className="list zeromargin no-hairlines-md">
                                <ul>
                                    <li className="item-content item-input item-input-outline">

                                    <div className="item-inner">
                                        <div className="item-title item-floating-label">Name</div>
                                        <div className="item-input-wrap">
                                            <input id="autocomplete-dropdown-expand auto" type="text" placeholder="Your name" />
                                            <span className="input-clear-button"></span>
                                        </div>
                                    </div>
                                    
                                    </li>
                                </ul>
                            </div>
                            </Col>
                            <Col width='20'>
                            <div className="list zeromargin no-hairlines-md">
                               
                            <button className="button button-fill" >Add&nbsp;&nbsp;<Icon size='20' f7='plus_circle_fill'></Icon></button>
                            </div>                        
                            </Col>
                        </Row>

                        {/* Single  Item Row  */}
                        <Row noGap>
                            <Col width='35'>
                                <List simple-list>
                                <ListItem >
                                    <Link onClick={()=>{console.log('click')}}><Icon f7='bubble_right_fill'  size='25'></Icon></Link>
                                    Chilli Paneer
                                    <div className="list_item">

                                    </div>
                                </ListItem>
                               </List>
                            </Col>
                            <Col width='15'>
                                <List simple-list>
                                    <ListItem>
                                        <Link onClick={()=>{console.log('click')}}><Icon className='icon' f7='plus_app_fill' color='gray' size='25'></Icon></Link>
                                        &nbsp;&nbsp;<span>4</span>&nbsp;&nbsp;
                                        <Link onClick={()=>{console.log('click')}}><Icon className='icon' f7='minus_square_fill' color='gray' size='25'></Icon></Link>
                                    </ListItem>
                                </List>
                            </Col>
                            <Col  width='10'>
                                <List noHairlinesMd>
                                    <ListItem>
                                        <div className='food__itemId'>
                                            #12434
                                        </div>
                                    </ListItem>
                                </List>
                            </Col>
                            <Col width='25'>
                                <List>
                                    <ListItem>&nbsp;&nbsp;
                                         Rs 120/-   
                                        <Link onClick={()=>{console.log('click')}}><Icon color='red' f7='trash' size='25'></Icon></Link>
                                    </ListItem>
                                </List>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </div>
                {/* </Block> */}
            

            </Page>
        )
    }
}
 