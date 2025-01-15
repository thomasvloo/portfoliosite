import './ReferralsView.css';

import React from 'react';
import { certifications } from 'types/certifications';

function ReferralsView() {
  return (
    <div className="referralCertContainer">
      <div className="referralContainer">
        <div className="referralHeader">
          <h3>Referrals</h3>
        </div>
      </div>
      <div className="certContainer">
        <div className="certHeader">
          <h3>Certifications</h3>
        </div>
        <ul className="certList">
          {certifications.map((cert, index) => (
            <li key={index} className="certItem">
              <span className="certName">{cert.name}</span>
              <a href={cert.file} download className="downloadLink">
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReferralsView;
