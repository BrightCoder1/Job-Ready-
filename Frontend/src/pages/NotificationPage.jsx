// NotificationPage.jsx
import React from 'react'
import LeftNavbar from '../components/LeftNavbar'
import Notification from '../components/Notification'
import './css/NotificationPage.css'

const NotificationPage = () => {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <LeftNavbar />

      {/* Main Content */}
      <div className="dashboard-content">
        <Notification />
      </div>

    </div>
  )
}

export default NotificationPage