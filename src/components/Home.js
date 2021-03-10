import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
import history from './history';
import { withRouter } from 'react-router-dom';
import hinhanh from './../image/thanhtinmkiem.PNG';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const BASEURL = 'http://localhost:3000/images/';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPhong: [],
      currentItem: null,
      query: '',
      data: [],
    }
  }
  // componentDidMount() {
  //   fetch('http://192.168.48.1:3000/phong', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log("List phong ban:", data);
  //       this.setState({
  //         listPhong: data
  //       })
  //     });
  // }

  detailClick = (item) => {
    console.log("detail click la  :", item)


    this.props.history.push({
      pathname: '/detail',
      state: { currentItem: item }
    })


  };
  bookClick = (item) => {
    console.log("book phong duoc click :")
    console.log("id la :", item.id);
    this.props.history.push({
      pathname: '/news',
      state: { currentItem: item }
    })
  };



  handleInputChange = (event) => {
    this.setState({
      query:event.target.value
    }, () => {
      this.filterArray();
    })    
    
  }

  getData = () => {
    fetch(`http://localhost:3000/phong`)
      .then(response => response.json())
      .then(responseData => {
        // console.log("respone data la :",responseData);
        this.setState({
          data: responseData,
          listPhong: responseData
        })
      })
  }


  filterArray = () => {
    const { query,data} = this.state;
    console.log("filterArray  query:" ,query);
    console.log("filt daerArray  data:" ,data);
    const newData = data.filter(e => e.loaiphong.toLowerCase().includes(query.toLowerCase()));
    // const newData = data.filter(e => e.giaphong.includes(query));

    this.setState({ listPhong: newData})
  }

  componentWillMount() {
    this.getData();
  }
  render() {
    const { data, listPhong } = this.state;
    console.log("listPhong:" ,listPhong)
    var { files } = this.state;

    return (
      <div>
        {/* <img src={hinhanh}  /> */}
        <div className="searchForm" style={{marginLeft:"43%",padding:10}}>
          <form>
          <label style={{fontSize:24,color:"#10a8c7",marginLeft:"-34%"}}>Tìm phòng:</label>
            <input  className="timkiem"  type="text" id="filter" placeholder="Tìm kiếm phòng" ref={input => this.search = input} onChange={(event) =>this.handleInputChange(event)} />
            {/* <button data-view-id="main_search_form_button" className="FormSearch__Button-sc-1fwg3wo-3 knOqgr"><img className="icon-search" src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" />Tìm Kiếm</button> */}
            
            
          </form>
          {/* <div>
            {
              this.state.data.map((i) =>
                <p>{i.name}</p>
              )
            }
          </div> */}
        </div>


        <div className="container-body">
          <div className="container-banner">
            <div className="animation-banner-text">
              <h1>SEA HOTEL</h1>
              <span>141 CHIEN THANG, HA DONG</span>
              <div className="tel">1900 669 968</div>
              <div className="star">_________________<img src='' alt="" />_________________</div>
              <div className>__________________________________</div>
              <div className="content">ROOM SUITES</div>
              <div className>__________________________________</div>
            </div>
            <div className="opacity-black" />
            <div className="screen-banner" />
            <div className="down-book-rooms"><i className="fas fa-chevron-down" /></div>
          </div>
          <div className="adress">
            <span className="left-adress"><b>ADDRESS :</b> 141 CHIEN THANG, HA DONG</span>
            <span className="right-adress"><b>EMAIL :</b> booking@sharkresort.com</span>
          </div>
        </div>
        <div className="container-our-rooms">
          <div className="content-our">
            <span>OUR ROOM</span>
          </div>
          <div className="chinhanh" style={{ display: "flex", marginTop: -96, flexWrap: "wrap", flexDirection: "row", justifyContent: 'flex-start' }}>
            {
              listPhong.map((item, index) => {
                files = item.anh.split(",");
                return (
                  <Card style={{ width: "30%", marginBottom: "30px", marginLeft: 45 }}>
                    <CardImg top width="100%" alt="Card image cap" src={BASEURL + files[0]} />
                    <CardBody>
                      <CardTitle tag="h5">Phòng {item.maphong}</CardTitle>
                      <CardText> {item.loaiphong}</CardText>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">Giá phòng : {item.dongia} </CardSubtitle>


                      <Button color="primary" onClick={() => this.bookClick(item)}>Book Now</Button>{' '}
                      <Button color="info" onClick={() => this.detailClick(item)}>Detail Room</Button>{' '}

                    </CardBody>
                  </Card>

                )
              })
            }
          </div>
        </div>
        <div className="extra-services">
          <div className="shadow-box-extra" />
          <div className="container" style={{ height: 0 }}>
            <div className="row">
              <div className="col-md-6">
                <h1>Extra Services</h1>
                <div className="content-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae imperdiet lorem. Quisque sagittis, sem a mattis molestie, velit purus blandit neque
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae imperdiet lorem. Quisque sagittis, sem a mattis molestie, velit purus blandit neque
          </div>
                <div className="room-suites">ROOMS E SUITES</div>
              </div>
              <div className="basic col-md-3">
                <div className="all-content-basic">
                  <div className="content-basic">
                    BASIC
            </div>
                  <div className="content-money">
                    $ 49.99
            </div>
                  <div className="perday">
                    PER DAY
            </div>
                </div>
                <div className="detail">
                  <p>Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor</p>
                </div>
                <div href className="read-more">READ MORE</div>
              </div>
              <div className="inclusive col-md-3">
                <div className="all-content-inclusive">
                  <div className="content-inclusive">
                    ALL INCLUSIVE
            </div>
                  <div className="content-money" style={{ color: 'white' }}>
                    $ 99.99
            </div>
                  <div className="perday" style={{ color: 'white' }}>
                    PER DAY
            </div>
                </div>
                <div className="detail">
                  <p>Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor</p>
                </div>
                <div href className="read-more" style={{ margin: '24%' }}>READ MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Home);
