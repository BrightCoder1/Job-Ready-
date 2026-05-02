import React from 'react'
import FirstPage from '../components/FirstPage'
import Categories from '../components/Categories'
import FeatureJob from './FeatureJob'
import ApplyProcess from '../components/ApplyProcess'
import RecentNews from '../components/RecentNews'

const Home = () => {
    return (
        <>
            <FirstPage />
            <Categories />
            <FeatureJob />
            <ApplyProcess />
            <RecentNews />
        </>
    )
}

export default Home
