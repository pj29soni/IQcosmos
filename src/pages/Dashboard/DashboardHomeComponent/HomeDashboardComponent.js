import React from 'react';
import './dashboardHome.css';
import DashboardCountComponent from './DashboardCount/DashboardCountComponent';
import DashboardGraphComponent from './DashboardGraph/DashboardGraphComponent';

const HomeDashboardComponent = () => {
    return (
        <>
            <div className='dashboard-main'>
                <div className='row'>
                    <DashboardCountComponent/>
                </div>
                <div className='row mt-4'>
                    <DashboardGraphComponent/>
                </div>
            </div>
        </>
    );
};

export default HomeDashboardComponent;