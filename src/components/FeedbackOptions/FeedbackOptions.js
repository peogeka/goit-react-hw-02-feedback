import { List, ListItem, Button } from './FeedbackOptions.styled';
const { Component } = require('react');

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    let content = [];
    for (let i = 0; i < Math.min(options.length, onLeaveFeedback.length); i++) {
      content.push(
        <ListItem key={i}>
          <Button onClick={onLeaveFeedback[i]}>{options[i]}</Button>
        </ListItem>
      );
    }

    return <List>{content}</List>;
  }
}