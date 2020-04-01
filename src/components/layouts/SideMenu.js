import React from 'react';

export default function SideMenu() {
  return (
    <div className='side-menu'>
      <h1 className='header'>ADCLOUD</h1>
      <ul>
        <li>
          <i class='fa fa-home'></i> Dashborads
        </li>
        <li>
          <i class='fa fa-line-chart'></i> Reports
        </li>
        <li>
          <i class='fa fa-cog' aria-hidden='true'></i> Settings
        </li>
        <li>
          <i class='fa fa-bell-slash-o'></i> Alerts
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <i class='fa fa-inr'></i> Billing
        </li>
      </ul>
    </div>
  );
}
