import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import gsap from 'gsap'

class Body extends React.Component {

    constructor(props){
        super(props);
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }




    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = gsap.to(this.myElement, 0.7, {x:200,y:200});
        
      }
    

    render(){

        
        return (

            <div>
                <header id = "banner">

                    <h1>
                        Test of GSAP 
                    </h1>
                </header>

                <div class ="cont">
                    <div id="box" ref={div => this.myElement = div}>
                        <div class="boxSmall"></div>
                        <div class="boxSmall boxTiny"></div>
                    </div>
                </div>

            </div>

        );
    }
}


ReactDOM.render(
    <Body/>,
    document.getElementById('root')
  );
