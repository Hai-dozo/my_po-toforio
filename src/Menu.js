import React from 'react';
import imageChina from './china-glaze.png';
import imageIkebana from './ikebana.png';
import './menu.scss'
import data from './menu.json'

const Show = ({ title, url, isOpen, onClick }) => (
    <div className="website">
        <div className="navbar">
          <p onClick={onClick}>{title}</p>
        </div>
        <div className="showcase">
            {isOpen && <iframe src={url}/>}
        </div>
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
            <Show
              key={q.id}
              title={q.title}
              url={q.url}
              isOpen={this.state.openIds.includes(q.id)}
              onClick={() => { this.handleChange(q.id); }}
            />
          ))}
        </div>
      )
    }
  }
  export default App;