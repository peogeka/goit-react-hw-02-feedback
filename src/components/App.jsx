import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };

  handleClickNeutral = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };

  handleClickBad = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good > 0 ? Math.round((this.state.good * 100) / this.countTotalFeedback()) : 0;
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={[this.handleClickGood, this.handleClickNeutral, this.handleClickBad]}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )
          }
        />
      </>
    );
  }
}