import React, { PropTypes } from 'react';
import StoryFooter from './StoryFooter';
import styles from './StoryCard.css';

const StoryCard = ({ cardId, collectionId, title, children }) => (
  <div className={styles.card}>
    <h2 className={'Title Rubik'}>{title}</h2>
    <div className={styles.description}>
      {children}
    </div>
    <StoryFooter cardId={cardId} collectionId={collectionId} />
  </div>
  );

StoryCard.displayName = 'StoryCard';

StoryCard.propTypes = {
  title: PropTypes.string,
  cardId: PropTypes.string,
  collectionId: PropTypes.string,
  children: PropTypes.node,
};

export default StoryCard;
