import React from 'react';
import './menu.scss'
import data from './menu.json'

const Show = ({ title, url }) => (
    <div className="website">
        <div className="navbar">
          <p>{title}</p>
          <a href={url} target="_blank">visit</a>
        </div>
        <div className="showcase">
          <iframe src={url}/>
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
            />
          ))}
        </div>
      )
    }
  }
export default App;