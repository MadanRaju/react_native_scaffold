import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import PastOutages from '../components/PastOutages/PastOutages';

const mapStateToProps = ({ districts, outages }) => ({ districts, outages });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastOutages);
