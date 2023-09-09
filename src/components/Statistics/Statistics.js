import { List, ListItem, TextStatistics} from './Statistics.styled';
const { Component } = require('react');

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <List>
        <ListItem>
          <TextStatistics>Good: {good}</TextStatistics>
        </ListItem>
        <ListItem>
          <TextStatistics>Neutral: {neutral}</TextStatistics>
        </ListItem>
        <ListItem>
          <TextStatistics>Bad: {bad}</TextStatistics>
        </ListItem>
        <ListItem>
          <TextStatistics>Total: {total}</TextStatistics>
        </ListItem>
        <ListItem>
          <TextStatistics>Positive feedback: {positivePercentage}%</TextStatistics>
        </ListItem>
      </List>
    );
  }
}