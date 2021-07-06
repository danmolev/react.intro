import React from 'react';
import ReactDOM from 'react-dom';
import Flip from 'react-reveal/Flip';
import './index.css';



class Content extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showing: null,
            color: null,
            text: null,
        };
    }

    render() {
        const color = this.props.color
        return (
        <Flip top duration={3000}>
          <div className="content" style={{
            backgroundColor: color}}>
            <h1>
                {this.props.text}
            </h1>
            {/* {alert(this.props.color)} */}
          </div>
        </Flip>  
        );
    }  
}


class Body extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            allContent: Array(4).fill(null),
        };
    }

    renderContent(c, t) {
        return (
          <Content color = {c} text = {t}/>
        );
      }

    render(){

        
        return (
            <div>
                {this.renderContent("Aquamarine","My name is Daniel")}
                {this.renderContent("Azure","I am very smart")}
                {this.renderContent("AliceBlue", "You should Hire Me!!!")}
                {this.renderContent("Grey", "I will make you lot's of moneys")}
            </div>
        
        );
    }
}


ReactDOM.render(
    <Body />,
    document.getElementById('root')
  );
