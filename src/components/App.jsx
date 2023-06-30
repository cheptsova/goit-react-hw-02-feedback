import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import style from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = stateKey => {
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      (this.state.good * 100) / this.countTotalFeedback();
    return positiveFeedback;
  };

  renderFeedbackOptions() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={style.appContainer}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </div>
    );
  }

  renderStatistics() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={style.appContainer}>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }

  render() {
    return (
      <>
        {this.renderFeedbackOptions()}
        {this.renderStatistics()}
      </>
    );
  }
}
