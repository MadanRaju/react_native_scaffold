import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import OutageComplete from '../components/OutageComplete/OutageComplete';

const mapStateToProps = ({ outages }) => ({ outages });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OutageComplete);
