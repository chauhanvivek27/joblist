import React , { Component } from 'react'
import { connect } from 'react-redux';
import JobCard from './JobCard';

export default class Job extends Component {

    render() {        
        return ( 
            <JobCard />
        )
    }
}