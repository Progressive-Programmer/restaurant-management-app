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

    constructor(){
        super();
        this.state = {
           



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
                                <div class="list  zeromargin no-hairlines-md">
                                    <ul>
                                        <li class="item-content item-input item-input-outline ">

                                        <div class="item-inner">
                                            <div class="item-title item-floating-label">Name</div>
                                            <div class="item-input-wrap">
                                                <input id="autocomplete-dropdown-expand" type="text" placeholder="Your name" />
                                                <span class="input-clear-button"></span>
                                            </div>
                                        </div>
                                        
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col width='30'>
                            <div class="list zeromargin no-hairlines-md">
                                <ul>
                                    <li class="item-content item-input item-input-outline">

                                    <div class="item-inner">
                                        <div class="item-title item-floating-label">Name</div>
                                        <div class="item-input-wrap">
                                            <input id="autocomplete-dropdown-expand" type="text" placeholder="Your name" />
                                            <span class="input-clear-button"></span>
                                        </div>
                                    </div>
                                    
                                    </li>
                                </ul>
                            </div>
                            </Col>
                            <Col width='20'>
                            <div class="list zeromargin no-hairlines-md">
                            <button class=" button button-fill" >Add</button>
                            </div>                        
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
 