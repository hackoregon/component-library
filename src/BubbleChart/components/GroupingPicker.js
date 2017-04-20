import React, { PropTypes } from 'react';
import styles from './GroupingPicker.css';

export default class GroupingPicker extends React.Component {
  onBtnClick = (event) => {
    this.props.onChanged(event.target.name);
  }
  render() {
    const { active } = this.props;

    return (
      <div className={styles.GroupingPicker}>
        <button className={`${active === 'all' && styles.active} ${styles.button}`} name="all" onClick={this.onBtnClick}>Group All</button>
        <button className={`${active === 'category' && styles.active} ${styles.button}`} name="category" onClick={this.onBtnClick}>Group by Category</button>
        <button className={`${active === 'spending' && styles.active} ${styles.button}`} name="spending" onClick={this.onBtnClick}>Group by Spending</button>
      </div>
    );
  }
}

GroupingPicker.propTypes = {
  onChanged: PropTypes.func.isRequired,
  active: PropTypes.oneOf(['all', 'category', 'spending']).isRequired,
};
