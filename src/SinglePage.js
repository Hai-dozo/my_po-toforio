import React from 'react';
import './single-page.scss'
import data from './single-page.json'

const Show = ({ title, url, desc}) => (
    <div className="website">
        <div className="navbar">
          <a href={url} target="_blank"><h3>{title}</h3></a>
          <p>{desc}</p>
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
              desc={q.desc}
            />
          ))}
        </div>
      )
    }
  }
export default App;