import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import UpdateERT from '../components/UpdateERT/UpdateERT';

const mapStateToProps = ({ outages }) => ({ outages });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateERT);
