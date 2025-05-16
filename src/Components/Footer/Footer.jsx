import React from "react";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/Youtube";
import styles from "./footer.module.css";
// import "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_inner_container}>
        <div className={styles.footer_icons}>
          <FacebookIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <div className={styles.footer_data}>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cars</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles.service_code}>
          <p>Service Code</p>
        </div>
        <div className={styles.copy_right}>&copy; 1997-2025 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
