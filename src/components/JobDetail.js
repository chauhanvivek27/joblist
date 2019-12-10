import React , { Component } from 'react'
import { connect } from 'react-redux';


class JobDetail extends Component {
    render() {
        const { data } = this.props;        
        const { params: { jobId } } = this.props.match; 
        let jobDetails = data.find(el => el.id === parseInt(jobId, 10));
        const { title, description, employment_type} = jobDetails;
        
        return (
                <div className="job-desc">
                    <h3>{title}</h3>         
                    <p>Description: {description}</p>
                    <p>Employment :{employment_type}</p>
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
   
  export default connect(mapStateToProps)(JobDetail)