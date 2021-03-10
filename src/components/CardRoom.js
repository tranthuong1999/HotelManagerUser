import React, { Component } from 'react';

class CardRoom extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="card card-room" style={{width: '21rem'}}>
            <div className="top">
              <div className="name-room-view">{this.props.nameRoom}</div>
              <img className="img-room-view card-img-top" src={this.props.image} alt="" />
            </div>
            <div className="card-body">
              <div className="title-room">{this.props.type}</div>
              <div className="infor-room-view">
                <span className="cts"><i className="far fa-user-circle" /><span id="value-ps">{this.props.guest}</span> GUESTS</span>
                <span className="cts"><i className="fab fa-houzz" /><span id="value-ft">{this.props.ft}</span> FT</span>
              </div>
              <div className="contents-room-view">{this.props.content}</div>
              <div className="book-now-view">BOOK NOW FOR {this.props.price}</div>
              <div className="servises-view">
                <div className="icon-view">
                  <img src="image/icon/icon-10.png" alt="" />
                  <img src="image/icon/icon-11.png" alt="" />
                  <img src="image/icon/icon-12.png" alt="" />
                  <img src="image/icon/icon-13.png" alt="" />
                </div>
                <div className="full-view">FULL INFOR <i className="fas fa-chevron-right" /></div>
              </div>
            </div>
          </div>
        );
    }
}

export default CardRoom;
