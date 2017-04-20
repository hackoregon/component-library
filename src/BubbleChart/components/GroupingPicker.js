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
        <button className={`${active === 'category1' && styles.active} ${styles.button}`} name="category1" onClick={this.onBtnClick}>Group by Category</button>
        <button className={`${active === 'category2' && styles.active} ${styles.button}`} name="category2" onClick={this.onBtnClick}>Group by Spending</button>
      </div>
    );
  }
}

GroupingPicker.propTypes = {
  onChanged: PropTypes.func.isRequired,
  active: PropTypes.oneOf(['all', 'category1', 'category2']).isRequired,
};
