import React, {Component, PropTypes} from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Radio } from '../src';
import RadioButtonGroup from 'react-radio-button';

const displayName = Radio.displayName || 'Radio';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const demoCode = () => {
  class DemoRadio extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        selectedValue: undefined,
        radioOptions: [
          { value: 'Snoopy', text: 'Snoopy' },
          { value: 'Charlie Brown', text: 'Charlie Brown'},
          { value: 'Sally', text: 'Sally'},
          { value: 'Shroeder', text: 'Shroeder'},
          { value: 'Lucy', text: 'Lucy'},
          { value: 'Linus', text: 'Linus'}
        ]
      };
    }

    handleChange(value) {
      this.setState({selectedValue: value,});
    }

    render() {
      return (
        <RadioButtonGroup
          selectedItemCallback={ (value) => this.state.handleChange(value)}
          listOfItems={this.state.radioOptions}
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
