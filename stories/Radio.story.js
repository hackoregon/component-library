import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Radio } from '../src';

const displayName = Radio.displayName || 'Radio';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const demoOptions = [
  { value: 'Snoopy', name: 'Snoopy' },
  { value: 'Charlie Brown', name: 'Charlie Brown'},
  { value: 'Sally', name: 'Sally'},
  { value: 'Shroeder', name: 'Shroeder'},
  { value: 'Lucy', name: 'Lucy'},
  { value: 'Linus', name: 'Linus'}
]

const demoCode = () => {
  class DemoRadio extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        checked: false,
        value: demoOptions[0].value
      };
    }

    handleChange(evt) {
      this.setState({
        checked: value,
      });
    }

    handleSubmit(evt) {
      console.log('You have selected:', this.state.checked);
      evt.preventDefault();
    }

    render() {
      return (
        <Radio
          onChange={this.handleChange}
          options={demoOptions}
          value={this.state.value}
        />
      );
    }
  }

  return <RadioButtonGroup listOfItems={this.state.radioOptions} selectedItemCallback= { (value) => this.handleChange(value)}/>
};

const propDocs = { inline: true, propTables: [Radio] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
