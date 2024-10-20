import styles from './Options.module.css';

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button className={styles.good} onClick={() => onFeedback('good')}>
        Good
      </button>
      <button className={styles.neutral} onClick={() => onFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles.bad} onClick={() => onFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
