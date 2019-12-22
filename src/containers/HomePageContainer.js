import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import HomePage from '../components/HomePage/HomePage';

const mapStateToProps = ({ districts }) => ({ districts });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
