import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SCardItemComponent, ButtonComponent } from '../../shared';
import styles from './ContinueButtonComponentStyle';

class ContinueButtonComponent extends Component {
  render() {
    const { onPressContinueButton } = this.props;
    const continueButtonText = this.props.content || 'Continue';
    const continueButton = <ButtonComponent
                            text={continueButtonText}
                            textStyle={styles.addWhiteTextStyle}
                            addStyle={styles.continueButton}
                            onPress={() => onPressContinueButton()}
                          />;

    return (
      <SCardItemComponent content={continueButton} addStyle={styles.addButtonContainerStyle} />
    );
  }
}

ContinueButtonComponent.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onPressContinueButton: PropTypes.func,
};

ContinueButtonComponent.defaultProps = {
  content: '',
  onPressContinueButton: null,
};

export { ContinueButtonComponent };
