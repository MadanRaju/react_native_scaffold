import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActivityLog from '../components/ActivityLog/ActivityLog';
import { ActionCreators } from '../actions/index';

const mapStateToProps = ({ outages }) => ({ outages });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityLog);
