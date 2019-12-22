import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import UpcomingOutages from '../components/UpcomingOutages/UpcomingOutages';

const mapStateToProps = ({ districts, outages }) => ({ districts, outages });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingOutages);
