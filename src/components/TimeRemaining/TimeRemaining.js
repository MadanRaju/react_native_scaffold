import React, { Component } from 'react';
import {
  format,
  differenceInMinutes,
  // differenceInDays,
  isToday,
} from 'date-fns';
import {
  Text,
  View,
  Modal,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  TimeRemainingComponent,
  ButtonComponent,
  SCardItemComponent,
  HandOffButtonComponent,
} from '../shared';

import commonStyle from '../../CommonStyle';
import styles from './TimeRemainingStyle';

const HandOverImage = require('../../assets/handOver.png');

class TimeRemaining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Putting this into state so that it will be easy to include calculateRemainingTime in a setTimeout
      timeRemainingDataArray: [],
      modalVisible: false,
    };
    this.headerText = 'Are you giving this outage to another foreman?';
    this.firstLineText = 'By clicking Yes below, you confirm that you have spoken to your supervisor about handing off this outage.';
    this.secondlineText = 'Note: You will not be able to edit information for this outage any longer.';
    this.yesButtonText = 'YES, HAND OFF NOW';
    this.noButtonText = 'NO, GO BACK';

    this.calculateTimeRemaining = this.calculateTimeRemaining.bind(this);
    this.buildButtons = this.buildButtons.bind(this);
    this.toggleModalVisiblity = this.toggleModalVisiblity.bind(this);
    this.completeHandOff = this.completeHandOff.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ toggleModalVisiblity: this.toggleModalVisiblity });
    this.calculateTimeRemaining();
  }

  toggleModalVisiblity() {
    const { modalVisible } = this.state;
    this.setState({
      modalVisible: !modalVisible,
    });
  }

  static navigationOptions({ navigation }) {
    const params = navigation.state.params || {};
    const handOffButtonContent =
    (
      <View style={styles.handOffButtonViewStyle}>
        <Image source={HandOverImage} style={styles.imageStyle} />
      </View>
    );
    return {
      headerRight: <HandOffButtonComponent content={handOffButtonContent} onPress={params.toggleModalVisiblity}/>,
    };
  }

  calculateTimeRemaining() {
    const { ERT } = this.props.outages.selectedUpcomingOutage;
    const displayERT = isToday(ERT) ?
      `Today ${format(ERT, 'h:mm A')}`
      :
      format(ERT, 'ddd MMM D  h:mm A');
    const minutesRemaining = differenceInMinutes(ERT, new Date());
    const remainingHours = Math.abs(Math.floor(minutesRemaining / 60));
    const remainingMinutes = `0${Math.abs(minutesRemaining % 60)}`.slice(-2);
    const timeRemaining = `${remainingHours}:${remainingMinutes}`;
    const timeRemainingDataArray = [
      {
        headerText: 'Initial ERT',
        detailText: displayERT,
      },
      {
        headerText: 'Time Remaining',
        detailText: timeRemaining,
      },
    ];
    this.setState({ timeRemainingDataArray });
  }

  buildButtons() {
    const buttonInfo = [
      {
        text: 'Update ERT',
        nextScreen: 'UpdateERT',
      },
      {
        text: 'All Load Up',
        nextScreen: 'ConfirmALU',
      },
    ];

    return buttonInfo.map((item, index) => {
      const { navigation } = this.props;
      return (
        <ButtonComponent
          text={item.text}
          textStyle={styles.addWhiteTextStyle}
          addStyle={styles.continueButton}
          onPress={() => navigation.navigate(item.nextScreen)}
          key={index}
        />
      );
    });
  }

  completeHandOff() {
    this.toggleModalVisiblity();
    this.props.navigation.navigate('Home');
  }

  render() {
    const buttonArray = this.buildButtons();

    return (
      <View style={commonStyle.viewStyle}>
        <View style={styles.addTimeRemainingComponentStyle}>
          <TimeRemainingComponent data={this.state.timeRemainingDataArray} />;
        </View>
        <SCardItemComponent content={buttonArray} addStyle={styles.addButtonContainerStyle} />
        <Modal
          animationType='none'
          transparent={true}
          visible={this.state.modalVisible}
        >
        <View style={styles.modalViewComponentStyle}>
          <View style={styles.modalViewStyle}>
            <Text style={[commonStyle.textStyle, styles.modalHeaderTextStyle]}>
              {this.headerText}
            </Text>
            <Text style={[commonStyle.textStyle, styles.modalDetailTextStyle]}>
              {this.firstLineText}
            </Text>
            <Text style={[commonStyle.textStyle, styles.modalDetailTextStyle]}>
              {this.secondlineText}
            </Text>
            <View style={styles.buttonsViewStyle}>
              <ButtonComponent
                text={this.yesButtonText}
                textStyle={[commonStyle.textStyle, styles.modalButtonTextStyle]}
                addStyle={styles.modalYesButtonStyle}
                onPress={this.completeHandOff}
              />
              <ButtonComponent
                text={this.noButtonText}
                textStyle={[commonStyle.textStyle, styles.modalButtonTextStyle]}
                addStyle={styles.modalNoButtonStyle}
                onPress={this.toggleModalVisiblity}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
    );
  }
}

TimeRemaining.propTypes = {
  outages: PropTypes.object,
  navigation: PropTypes.object,
};

TimeRemaining.defaultProps = {
  outages: {},
  navigation: {},
};

export default TimeRemaining;
