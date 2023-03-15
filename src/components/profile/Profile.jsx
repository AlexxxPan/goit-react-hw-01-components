import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
return (
<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.profileName}>{username}</p>
    <p className={styles.profileTag}>@{tag}</p>
    <p className={styles.profileLocation}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.followersList}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.viewsList}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.likesList}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
}

Profile.propTypes = {
avatar: PropTypes.string.isRequired,
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
stats: PropTypes.object.isRequired,
};