import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

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
        
          <div className="content"  id = {"cont"+this.props.id} style={{
            backgroundColor: color}}>
            <h1>
                {this.props.text}
            </h1>
          </div>
        
        );
    }  
}


class Body extends React.Component {

    constructor(props){
        super(props);
        this.allContent = Array(4).fill(null);

    }

    renderContent(c, t, id) {
        return (
          <Content color = {c} text = {t} controller = {this.controller} id = {id}/>
        );
      }

    render(){
        

        this.allContent[0] = this.renderContent("Aquamarine","My name is Daniel", 0);
        this.allContent[1] = this.renderContent("Azure","I am very smart", 1);
        this.allContent[2] = this.renderContent("AliceBlue", "You should Hire Me!!!", 2);
        this.allContent[3] = this.renderContent("Grey", "I will make you lot's of moneys",3);

        
        return (
            <div>

                <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                    <Scene pin>
                        <div>{this.allContent[0]}</div>
                    </Scene>
                    <Scene pin>
                        <div>{this.allContent[1]}</div>
                    </Scene>
                    <Scene pin>
                        <div>{this.allContent[2]}</div>
                    </Scene>
                    <Scene pin>
                        <div>{this.allContent[3]}</div>
                    </Scene>
                </Controller>
                            
            </div>
        
        );
    }
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')
);
