import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
    <table className={styles.transactionHistoryTable}>
    <thead className={styles.hederRow}>
      <tr className={styles.valuesRow}>
        <th className={styles.columnItem}>Type</th>
        <th className={styles.columnItem}>Amount</th>
        <th className={styles.columnItem}>Currency</th>
      </tr>
    </thead>
    <tbody>
    {items.map(item => (
      <tr key={item.id} className={styles.valuesRow}>
        <td className={styles.transactionData}>{item.type}</td>
        <td className={styles.transactionData}>{item.amount}</td>
        <td className={styles.transactionData}>{item.currency}</td>
      </tr>
    ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };