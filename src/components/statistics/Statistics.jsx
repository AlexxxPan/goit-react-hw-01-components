import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomHexColor() {
  let rendColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return rendColor;
}

export const Statistics = ({ title, stats }) => (
  <div className={styles.statisticsContainer}>
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            className={title ? styles.statListItem : styles.statListItemNoTitle}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};





