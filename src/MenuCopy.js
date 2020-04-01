import React from 'react';
import './menu.scss'
import data from './menu.json'

const Navbar = ({ title, onClick, value}) => (
  <div className="navbar">
    <p onClick={onClick} value={value}>{title}</p>
  </div>
);

const ShowCase = ({url, isOpen}) => (
  <div className="showcase">
    { isOpen && <iframe src={url} /> }
  </div>
)
  
class Bpp extends React.Component {
  constructor(props){
    super(props);
    this.json = data;
      this.state={
        openIds: "",
        openId: ""
      }
      // this.handleChange = this.handleChange.bind(this);
      this.handleChangee = this.handleChangee.bind(this);
  }
  // handleChange(id){
  //   let { openIds } = this.state;
  //   openIds = openIds.includes(id) ? openIds.filter(e => e !== id) : [...openIds, id];
  //   this.setState({ openIds });
  // }
  
  handleChangee(id){
    this.setState({
      openId: id.target.value
    })
  }
  render(){
    return(
      <div className="website-wrapper">   


        {this.json.map(q => (
          <Navbar
            key={q.id}
            value={this.state.openId}
            title={q.title}
            onClick={() => { this.handleChangee(q.id); }}
          />
        ))}
        {this.json.map(q =>(
          <ShowCase
            key={q.id}
            url={q.url}
            isOpen={this.state.openIds.includes(q.id)}
          />
        ))}
      </div>
    )
  }
}
export default Bpp;