import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={styles.item}>
  <span className="status"></span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
  <p className="name"></p>
</li>
  );
