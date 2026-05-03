import React from 'react'
import MyJobList from '../components/MyJobList'
import LeftNavbar from '../components/LeftNavbar';

const MyJob = () => {
    return (
        <>
            <div className="dashboard-layout">

                <LeftNavbar />

                <div className="dashboard-content">
                    <MyJobList />
                </div>

            </div>
        </>
    )
};

export default MyJob;