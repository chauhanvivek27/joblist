import Job from './components/Job';
import JobDetail from './components/JobDetail';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Job
  },
  {
    path: '/job/:jobId',
    exact: true,
    component: JobDetail,
   
  }
];

export default Routes;