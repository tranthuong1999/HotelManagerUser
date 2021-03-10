import React, { Component } from 'react';
import { Row, Col, Button } from "reactstrap";
import { Slide } from 'react-slideshow-image';
import hinhanh from './../image/banner.jpg';
import hinhanh1 from './../image/banner2.jpg';
import hinhanh2 from './../image/banner4.jpg';
import history from './history';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import moment from 'moment';

const optionSoPhong = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
];

class News extends Component {
  constructor(props) {
    super(props);
    const currentItem = props.location.state?.currentItem;
    console.log("ID phong ben new:", currentItem);
    this.state = {
      ten: " ",
      sdt: " ",
      cmnd: "",
      diachi: "",
      sophong:"",
      ngaybatdau: new Date (),
      ngayketthuc:new Date(),
      tenError: "",
      sdtError: "",
      cmndError: "",
      diachiError: "",
      soPhongError:"",
      listUser: [],
      maphong:currentItem?.maphong,
      idphong:currentItem?.id,
      dongia:currentItem?.dongia,
      sotien:"",
      
    }
  }
  isChangeTen = (event) => {
    this.setState({
      ten: event.target.value
    });
  }
  isChangeSdt = (event) => {
    this.setState({
      sdt: event.target.value
    });
  }

  isChangeCmnd = (event) => {
    this.setState({
      cmnd: event.target.value
    });
  }

  isChangeDiaChi = (event) => {
    this.setState({
      diachi: event.target.value
    });
  }
  handleChange = sophong => {
    this.setState(
      {  sophong},
      () => console.log(`Option selected:`, this.state.sophong)
    );
  };

  componentDidMount() {
    fetch('http://192.168.48.1:3000/dangkiphong', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          listUser: data
        })
      });
  }

  submitForm = (event) => {
    const { ten, sdt, cmnd, diachi,ngaybatdau,sophong,ngayketthuc,idphong,dongia,sotien } = this.state
    event.preventDefault();
    if (ten.toString().trim().length === 0) {
      this.setState({ tenError: 'Bạn phải nhập tên' });
      return;
    }
    if (sdt.toString().trim().length === 0) {
      this.setState({ sdtError: 'Bạn phải nhập sdt' });
      return;
    }
    if (cmnd.toString().trim().length === 0) {
      this.setState({ cmndError: 'Bạn phải nhập số cmnd' });
      return;
    }
    if (diachi.toString().trim().length === 0) {
      this.setState({ diachiError: 'Bạn phải nhập địa chỉ' });
      return;
    }
    if (sophong.toString().trim().length === 0) {
      this.setState({ soPhongError: 'Bạn phải nhập số phòng' });
      return;
    }
    if (ngaybatdau.toString().trim().length === 0) {
      this.setState({ soPhongError: 'Bạn phải nhập ngày bắt đầu đăng kí ' });
      return;
    }
    if (ngayketthuc.toString().trim().length === 0) {
      this.setState({ soPhongError: 'Bạn phải nhập ngày kết thúc đăng kí' });
      return;
    }
    const method = 'POST';
    const url = "http://192.168.48.1:3000/dangkiphong";
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           ten:ten,
           sdt:sdt,
           cmnd:cmnd,
           diachi:diachi,
           sophong:sophong.value,
           ngaybatdau: ngaybatdau,
           ngayketthuc:ngayketthuc,
           idphong:idphong,
           dongia:dongia,
           sotien:(sophong.value) *(dongia),
        })
    };
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log("update success:", data);
        this.props.history.push("/home");
        alert("Bạn đã đăng kí phòng thành công");
        
    }).catch((error) => {
        console.error('Error:', error);
    });
  }
  render() {
    const { ten,sophong,ngaybatdau,ngayketthuc,soPhongError, sdt, cmnd, diachi,tenError, sdtError, cmndError, diachiError,maphong } = this.state 
    return (
      <div>
        <h1 style={{ textAlign: "center",color: "red" }}> Đăng kí phòng {maphong}   </h1>
        <div className="container">
          <Row>
            <Col lg="3">
              <label>Tên:</label>
            </Col>
            <Col lg="9">
              <input style={{ width: "100%", padding: 5, marginBottom: 10 }}
                value={ten}
                onChange={(event) => this.isChangeTen(event)}
               
              />
              <p className="help-block text-danger">{tenError}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <label>Sdt:</label>
            </Col>
            <Col lg="9">
              <input style={{ width: "100%", padding: 5, marginBottom: 10 }}
                value={sdt}
                onChange={(event) => this.isChangeSdt(event)}
              />
              <p className="help-block text-danger">{sdtError}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <label>Số cmnd:</label>
            </Col>
            <Col lg="9">
              <input style={{ width: "100%", padding: 5, marginBottom: 10 }}
                value={cmnd}
                onChange={(event) => this.isChangeCmnd(event)}
              />
              <p className="help-block text-danger">{cmndError}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <label>Địa chỉ:</label>
            </Col>
            <Col lg="9">
              <input style={{ width: "100%", padding: 5, marginBottom: 10 }}
                value={diachi}
                onChange={(event) => this.isChangeDiaChi(event)}
  
              />
              <p className="help-block text-danger">{diachiError}</p>
            </Col>
          </Row>
          <Row>
                <Col lg="3">
                  <label>Số Phòng:</label>
                </Col>
                <Col lg="9">
                  <Select
                    value={sophong}
                    onChange={(event) => this.handleChange(event)}
                    options={optionSoPhong}
                    placeholder="sophong"
                  />
                  <p className="help-block text-danger" > {soPhongError}</p>

                </Col>
              </Row>
              <Row>
                <Col lg="3">
                  <label>Ngày đăng kí:</label>
                </Col>
                <Col lg="9">
                    <DatePicker  style={{marginBottom:21,marginTop:12}}
                      selected={ngaybatdau} 
                      onChange={date =>{
                        // console.log("date selected:", date.toString());
                        const dateString = moment(date).format('YYYY/MM/DD');
                        console.log("date dateString:", dateString);
                        this.setState({ 
                          ngaybatdau: date
                        })
                      }}
                    />
                  {/* <p className="help-block text-danger" > {ngaySinhError}</p> */}
                </Col>
              </Row>
  
              

          <button style={{ textAlign: "center", padding: 13,marginTop:15,marginBottom: 20, marginLeft: "45%" }} color="info" type="submit" onClick={(event) => this.submitForm(event)}>Send</button>
        </div>
        




      </div>
    );
  }
}

export default withRouter(News);
