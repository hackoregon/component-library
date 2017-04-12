import React from 'react';
import classNames from 'classnames/bind';
import styles from './Radio.styles.css';

class Radio extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      checked: false
    };
  }

  handleChange(evt) {
    this.setState({
      checked: evt.target.value
    });
  }

  handleFormSubmit(evt) {
    console.log('You have selected:', this.state.checked);
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div class="radio">
          <label>
            <input type="radio" value="option1" checked={this.state.checked==="option1"} onChange={this.handleChange}/>Option 1
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" value="option2" checked={this.state.checked==="option2"} onChange={this.handleChange}/>Option 2
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" value="option3" checked={this.state.checked==="option3"} onChange={this.handleChange}/>Option 3
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" value="option4" checked={this.state.checked==="option4"} onChange={this.handleChange}/>Option 4
          </label>
        </div>
        <button class="btn btn-default" type="submit">Submit</button>
      </form>
    )
  }
}

Radio.propTypes = {

}

Radio.defaultProps = {

}
export default Radio;
