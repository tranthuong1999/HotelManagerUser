// import React, { Component } from 'react';
// import down from './../image/icon/down.png';
// import CardRoom from './CardRoom';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import hinhanh from './../image/banner2.jpg';
// import hinhanh1 from './../image/banner3.jpg';
// import hinhanh2 from './../image/banner4.jpg';


// const properties = {
//   duration: 3000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true
// }
// class Rooms extends Component {
//   render() {
//     return (
//       <div>
//         <Slide {...properties} style={{ width: "100%", height: " 700" }}>
//           <div className="each-slide">
//             <div style={{ 'backgroundImage': `url(${hinhanh})` }}>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{ 'backgroundImage': `url(${hinhanh1})` }}>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{ 'backgroundImage': `url(${hinhanh2})` }}>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     );
//   }
// }

// export default Rooms;
import React, { Component } from 'react';

class Room extends Component {
    state = {
        query: '',
        data: [],
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
        this.filterArray();
    }

    getData = () => {
        fetch(`http://localhost:4000/restaurants`)
        .then(response => response.json())
        .then(responseData => {
            // console.log(responseData)
            this.setState({
                data:responseData
            })
        })
    }

    filterArray = () => {
        var searchString = this.state.query;
        var responseData = this.state.data
        if(searchString.length > 0){
            // console.log(responseData[i].name);
            responseData = responseData.filter(l => {
                console.log( l.name.toLowerCase().match(searchString));
            })
        }
    }

    componentWillMount() {
        this.getData();
    }
    render() {
        return (
            <div className="searchForm">
                <form>
                    <input type="text" id="filter" placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
                </form>
                <div>
                    {
                        this.state.data.map((i) =>
                            <p>{i.name}</p>
                        )
                    }
                </div>
            </div>
        )
    }
}


export default Room;
