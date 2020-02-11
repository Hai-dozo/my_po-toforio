import React from 'react';
import imageChina from './china-glaze.png';
import imageIkebana from './ikebana.png';
import './menu.scss'

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hover: false
        }
        this.mouseOver = this.mouseOver.bind(this);
        
    }
    mouseOver(){
        this.setState({
            hover: true,
        })
    }
    render(){
        const imgChina = <img class='img' src={imageChina} />;
        const imgIkebana = <img class='img' src={imageIkebana} />;
        return(
            <div className='main'>
                <div className='navbar'>
                    <div>
                        <p onMouseOver={this.mouseOver}>China glaze Landing Page</p>
                    </div>
                    <div>
                        <p onMouseOver={this.mouseOver}>Ikebana Musium Landing Page</p>
                    </div>
                </div>
                
                <div className='showcase'>
                    <div>
                        <p>{this.state.hover && imgChina}</p>
                    </div>
                    <div>
                        {this.state.hover && imgIkebana}
                    </div>
                </div>
            </div>

        )
    }
}

export default Menu;