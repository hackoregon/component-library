import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { Dropdown } from '../src';

const displayName = Dropdown.displayName || 'Dropdown';
const title = 'Simple usage';
const description = `
  This is some basic usage with the select dropdown.
  Selecting a dropdown option should trigger an onChange call.`;

const demoOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'giraffe', label: 'Giraffe' },
];

const demoCode = () => {
  class DemoDropdown extends Component {
    constructor() {
      super();
      this.state = { value: demoOptions[0].value };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
      this.setState({ value });
    }

    render() {
      return (
        <Dropdown
          onChange={this.handleChange}
          options={demoOptions}
          value={this.state.value}
        />
      );
    }
  }

  return <DemoDropdown />;
};


const propDocs = { inline: true, propTables: [Dropdown] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );