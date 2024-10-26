"use client"
import { useState } from 'react'
import MenuModal from '../components/MenuModal';
import Navbar from '../components/Navbar';
import MissionComponent from './components/MissionComponent';
import VishalComponent from './components/VishalComponent';
import ChangeComponent from './components/ChangeComponent';
import BackedByComponent from './components/BackedByComponent';
import TimelineComponent from './components/TimelineComponent';
import Footer from '../components/Footer';

const AboutUs = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className="h-[100dvh]">
            {isModalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out opacity-100"></div>
            )}
            <MenuModal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />
            <div className="min-h-[100dvh] font-poppins">
                <Navbar
                    toggleModal={() => setIsModalVisible(true)}
                    isSection1={false}
                />
                <MissionComponent/>
                <VishalComponent/>
                <ChangeComponent/>
                <BackedByComponent/>
                <TimelineComponent/>
                <Footer/>
            </div>
        </div>
    )
}

export default AboutUs