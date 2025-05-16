import React from "react";
import NetflixLogo from "../../assets/Images/Netflix_Logo.png";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Notification from "@mui/icons-material/NotificationsActiveOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBoxOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownOutlined";
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header_outer_container}>
      {/* <div className="header_container"> */}
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <ul>
            <img src={NetflixLogo} alt="netflix" width="100" />

            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className={styles.header_right}>
          <ul>
            <li>
              {" "}
              <SearchIcon />
            </li>
            <li>
              <Notification />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
