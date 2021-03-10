import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { withRouter } from 'react-router-dom';
import history from './history';


const BASEURL = 'http://localhost:3000/images/';
class DetailRoom extends Component {
    constructor(props) {
        const currentItem = props.location.state?.currentItem;
        console.log("Home detail currentItem:", props);
        super(props);
        this.state = {
            anh: currentItem?.anh || "",
            maphong: currentItem?.maphong || "",
            sophong: currentItem?.sophong || "",
            dientich: currentItem?.dientich || "",
            dongia: currentItem?.dongia || "",
        }
    }

    bookClickk = () => {
        const currentItem = this.props.location.state?.currentItem;
        this.props.history.push({
            pathname: '/news',
            state: { currentItem: currentItem }
          })
    };
    render() {
        var { anh, maphong,dientich,dongia } = this.state;
        anh = anh.split(",");
        console.log("hinh anh :", anh);
        return (
            <div>
                <div>
                    <h2 style={{ textAlign: "center" }}>Thông tin phòng:{maphong}</h2>
                    <h6 style={{ textAlign: "center" }}>Mã phòng :{maphong}</h6>
                    <h6 style={{ textAlign: "center" }}>Diện tích :{dientich}</h6>
                    <h6 style={{ textAlign: "center" }}>Đơn giá :{dongia}</h6>
                    <div className="chinhanh" style={{ display: "flex", flexWrap: "wrap", width: "30%", margin:"auto" }}>
                        <Slide easing="ease" style={{width:"127%",marginTop:-62}}>
                        {anh.map((value) =>{
                            return <img  src={BASEURL +value} />
                        })}
                        </Slide>
                    </div>
                    <Button color="primary" style={{ marginLeft: "46%", marginTop: "-9%" }} onClick={() => this.bookClickk()}>Book Now</Button>{' '}

                </div>
            </div>
        );
    }
}

export default withRouter(DetailRoom);

