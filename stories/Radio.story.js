import React, {Component, PropTypes} from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Radio } from '../src';
import RadioButtonGroup from 'react-radio-button';

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
      this.state = {
        selectedValue: undefined,
        radioOptions: demoOptions
      };
    }

    handleChange(value) {
      this.setState({
        selectedValue: value,
      });
    }

    render() {
      return (
        <RadioButtonGroup
          selectedItemCallback={this.state.handleChange}
          listOfItems={demoOptions}
        />
      );
    }
  }

  return <DemoRadio/>
};

const propDocs = { inline: true, propTables: [Radio] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
