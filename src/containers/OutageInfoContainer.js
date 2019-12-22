import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import OutageInfo from '../components/OutageInfo/OutageInfo';

const mapStateToProps = ({ outages }) => ({ outages });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OutageInfo);
