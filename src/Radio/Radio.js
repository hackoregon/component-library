import React from 'react';
import classNames from 'classnames/bind';
import styles from './Radio.styles.css';

class Radio extends React.Component {

  constructor(props) {
    super(props);
    this.checkIt = this.checkIt.bind(this);
    this.unCheckIt = this.unCheckIt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked:false
    };
  }

  checkIt() {
    this.setState({
      checked:true
    });
  }

  unCheckIt() {
    this.setState({
      checked:false
    });
  }

  handleChange(evt) {
    if(this.state.checked !== evt.target.checked) {
      this.setState({
        checked:evt.target.checked
      });
    }
  }

  render() {
    return (
      <form>
        <div class="radio">
          <label><input type="radio" name="option" checked={this.state.checked} onChange={this.handleChange}/>Option 1</label>
        </div>
        <div class="radio">
          <label><input type="radio" name="option" checked={this.state.checked} onChange={this.handleChange}/>Option 2</label>
        </div>
        <div class="radio">
          <label><input type="radio" name="option" checked={this.state.checked} onChange={this.handleChange}/>Option 3</label>
        </div>
        <div class="radio">
          <label><input type="radio" name="option" checked={this.state.checked} onChange={this.handleChange}/>Option 4</label>
        </div>
      </form>
    )
  }
}

Radio.propTypes = {

}

Radio.defaultProps = {

}

export default Radio;
