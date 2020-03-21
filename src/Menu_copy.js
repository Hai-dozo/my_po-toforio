import React from 'react';
import imageChina from './china-glaze.png';
import imageIkebana from './ikebana.png';
import './menu.scss'
import data from './menu.json'

const Navbar = ({ title, onClick }) => (
  <div className="navbar">
    <p onClick={onClick}>{title}</p>
  </div>
);

const ShowCase = ({ url, isOpen }) => (
  <div className="showcase">
    {isOpen && <iframe src={url}/>}
  </div>
);
  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.json = data;
        this.state={
          openIds: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id){
      let { openIds } = this.state;
      openIds = openIds.includes(id) ? openIds.filter(e => e !== id) : [...openIds, id];
      this.setState({ openIds });
    }
    render(){
      return(
        <div className="website-wrapper">
          {this.json.map(q => (
            <Navbar
              key={q.id}
              title={q.title}
              onClick={() => { this.handleChange(q.id); }}
            />
          ))}

          {/* {this.json.map(q => (
            <ShowCase
              key={q.id}
              isOpen={this.state.openIds.includes(q.id)}
              onClick={() => { this.handleChange(q.id); }}
            />
          ))} */}
        </div>
      )
    }
  }
  export default App;