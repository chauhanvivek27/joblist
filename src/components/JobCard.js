import React , { Component } from 'react'
import { connect } from 'react-redux';
import './jobcard.scss';


class JobCard extends Component {
    render() {
        console.log('this.props', this.props);
        const { isavailable , data } = this.props;

        return ( 
          
                <div className="title">
                <ul>
                    {data.map((item,i) =>                     
                      <li key={item.id} className="job-card">
                        <h3>
                        <a href={`job/${item.id}/`}>{item.title}</a>
                        </h3>
                      </li>
                    )}
                </ul>                
                </div>                 
          
        )
    }
}

function mapStateToProps(state) {
    const { isavailable, data } = state   
    return {
      isavailable,
      data
    }
  }
   
  export default connect(mapStateToProps)(JobCard)