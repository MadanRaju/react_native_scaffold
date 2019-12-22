import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import ConfirmALU from '../components/ConfirmALU/ConfirmALU';

const mapStateToProps = ({ outages }) => ({ outages });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmALU);
