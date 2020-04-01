import React from 'react';

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1>Welcome</h1>
      <ul>
        <li>
          <i class='fa fa-envelope' aria-hidden='true'></i>
        </li>
        <li>
          <i class='fa fa-bell' aria-hidden='true'></i>
        </li>
        <li>
          <i class='fa fa-flag' aria-hidden='true'></i>
        </li>
        <li>
          <i class='fa fa-circle-thin' aria-hidden='true'></i>
        </li>
        <li>
          <i class='fa fa-cogs' aria-hidden='true'></i>
        </li>
      </ul>
    </div>
  );
}
