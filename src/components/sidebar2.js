import './sidebar.css'

import React from 'react'

export default function sidebar() {
  return (
      <div class="sidebar">
          <div class="title">SPL</div>
          <ul class="nav">
            <li>
              <a class='active'>Dashboard</a>
            </li>
            <li>
              <a >Create Team</a>
            </li>
            <li>
              <a>Report Generator</a>
            </li>
            <li>
              <a>Announcements</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> 
  )
}
