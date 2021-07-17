import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {gsap,TimelineMax,SteppedEase} from 'gsap'

import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


class Body extends React.Component {

    constructor(props){
        super(props);
        this.myElement = null;

        this.lines = Array(9).fill(null)
        // reference to the animation
        this.myTween = null;
    }


    componentDidMount(){
        // use the node ref to create the animation
        //this.myTween = gsap.to(this.myElement, 0.7, {x:200,y:200});
        
        gsap.to(this.lines[0], {
            duration: 2.2,
            text: {
                value: "echo \"Hello World\" > hi.txt",
                delimiter: " "
            },
            ease: "power2"
        });

        
      }
    

    render(){

        
        return (

            <div className = "allBanner">

                <div className= "bannerAni">

                </div>

                <div className = "bannerCode">
                    <div id = "bar">
                        <div id="red"></div>
                        <div id="yellow"></div>
                        <div id="green"></div>
                    </div>

                    <div id="screen">

                        <span className="font line1 pre"  ref={span => this.lines[0] = span}> </span>&nbsp;
                        <span className= "font line1 post" ref={span => this.lines[1] = span} ></span>
                        <span><br></br></span>

                        <span className="font line2 pre"  ref={span => this.lines[1] = span}> </span>&nbsp;
                        <span className= "font line2 post" ref={span => this.lines[2] = span} ></span>
                        <span><br></br></span>

                        <span className="font line3 pre"  ref={span => this.lines[3] = span}> </span>&nbsp;
                        <span className= "font line3 post" ref={span => this.lines[4] = span} ></span>
                        <span><br></br></span>

                        <span className="font line3 pre"  ref={span => this.lines[5] = span}> </span>&nbsp;
                        <span className= "font line3 post" ref={span => this.lines[6] = span} ></span>
                        <span><br></br></span>


                    </div>

                    {/* <div id="bar">
                        <div id="red"></div>
                        <div id="yellow"></div>
                        <div id="green"></div>
                    </div>

                    <div id="screen">
                        <p class="font">root@10.0.0.1:~$</p>
                    </div> */}

                </div>


                    {/* <div className = "banner animiation">
                        <img src= "red.png" alt=""/>
                    </div>

                    <div className = "banner code" id = "code">
                        <p ref={p => this.myElement = p}></p>
                    </div> */}
            </div>

        );
    }
}


ReactDOM.render(
    <Body/>,
    document.getElementById('root')
  );
