import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const sanpham = [
  {
    ten : "chuot",
    gia: 200000
  }
  ,
  {
    ten : "Ban phim",
    gia : 90000
  }
];

const CacSanPham =  sanpham.map((item)=>   
<div> 
  <li> ten sna pham : {item.ten} </li> 
  </div>
) 
const n1 = [1,2,3];
const n2 = n1.map((item) => item+4);

class App1 extends Component {

  handleClick(){
    alert('xxx');
    console.log('tada');
  }

  handleClick2(){
    alert('xxx');
    console.log('tada');
  }
  showButtonFree(){
    const isFree = this.props.free; 
    if(isFree === true) {
      return (
        <div>
            <button onClick={this.handleClick()}> Click vao nut  </button>
          </div>
      );
    }
  }
  render() {
    return (
      <div>
        {CacSanPham}
        <div>
            <button onClick={()=>this.handleClick()}> Click vao nut  </button>
            <button onClick={this.handleClick2}> Click vao nut  </button>
          </div>
      </div>
    );
  }
}



// ham button 

class App2 extends Component {
  show_info = () => {
    alert("hello");
  }
  render() {
    return (
      <div className="card text-left">
      <img className="card-img-top" src="http://placehold.it/700x400" alt />
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab temporibus architecto, quas est harum porro ducimus maiores dicta ullam vitae hic dolore nihil beatae, asperiores deserunt quos tempore, minus fugit!</p>
        <div className="btn-group">
          <div className="btn btn-info" onclick={this.show_info()}> Edit </div>
          <div className="btn btn-danger">Remove </div>
        </div>
      </div>
    </div>
    );
  }
}


class App extends Component {
  
  render() {
    return (
      <div className="App">
{/*          
       {CacSanPham}
       {n2} */}
      <App2/>
      <App2/>
      <App2/>
      <App2/>

        
      </div>
    );
  }
}

export default App;
