import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Radio } from '../src';

const displayName = Radio.displayName || 'Radio';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const demoCode = () => {
  class DemoRadio extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        checked: false
      };
    }

    handleChange(evt) {
      this.setState({
        checked: evt.target.value
      });
    }

    handleSubmit(evt) {
      console.log('You have selected:', this.state.checked);
      evt.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div classNames="radio">
            <label>
              <input type="radio" value="option1" checked={this.state.checked==="option1"} onChange={this.handleChange}/>Option 1
            </label>
          </div>
          <div classNames="radio">
            <label>
              <input type="radio" value="option2" checked={this.state.checked==="option2"} onChange={this.handleChange}/>Option 2
            </label>
          </div>
          <div classNames="radio">
            <label>
              <input type="radio" value="option3" checked={this.state.checked==="option3"} onChange={this.handleChange}/>Option 3
            </label>
          </div>
          <div classNames="radio">
            <label>
              <input type="radio" value="option4" checked={this.state.checked==="option4"} onChange={this.handleChange}/>Option 4
            </label>
          </div>
          <button classNames="btn btn-default" type="submit">Add Item</button>
        </form>
      )
    }
  }

}

const propDocs = { inline: true, propTables: [Radio] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
