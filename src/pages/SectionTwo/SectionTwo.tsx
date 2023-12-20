import {Component} from "react";
import MainImg from '../../images/SectionTwo/ImgFront.png'
import Exp from '../../images/SectionTwo/ExperienceLogo.png'
import Cus from '../../images/SectionTwo/CustomerLogo.png'
import Trn from '../../images/SectionTwo/TrainerLogo.png'
import Like from '../../images/SectionTwo/LikeLogo.png'

export class SectionTwo extends Component {
    render() {
        return (
            <>
                <section className="flex pl-64 pr-64 pt-32">

                    <div className="flex-1 flex justify-center">
                        <img src={MainImg} className="w-[65%]"/>
                    </div>

                    <div className="flex-1 flex justify-center flex-col">
                        <h1 className="text-[40px] font-medium -mt-8">What We <span
                            className="text-primary">OFFER</span></h1>
                        <p className="mt-1 text-gray-400">Revitalize your fitness journey with our state-of-the-art gym! Unleash your potential in a dynamic space equipped with cutting-edge equipment, expert trainers, and a motivating atmosphere. Join us for personalized workouts, group classes, and a supportive community. Elevate your wellness experience at our premier gym today!</p>
                        <button className="border-[1px] border-gray-300 hover:bg-primary rounded-[5px] mt-12 w-[150px]">
                            <h1
                                className="text-[12px] font-medium p-2 text-black hover:text-white">Contact Us</h1></button>
                    </div>

                </section>

                <section className="flex pl-64 pr-64 pt-5 justify-between">
                    <div className="h-24 w-[280px] border-gray-300 border-[1px] rounded-[10px] flex p-4">
                        <div className="flex justify-center items-center h-100% w-[40%]">
                            <img src={Exp} className="w-[40%]"/>
                        </div>
                        <div className="flex flex-col justify-center h-100% w-[60%]">
                            <h1 className="text-[25px] font-medium -mb-2">10 Years</h1>
                            <h1 className="text-[15px] font-thin">Experience</h1>
                        </div>
                    </div>
                    <div className="h-24 w-[280px] border-gray-300 border-[1px] rounded-[10px] flex p-4">
                        <div className="flex justify-center items-center h-100% w-[40%]">
                            <img src={Cus} className="w-[40%]"/>
                        </div>
                        <div className="flex flex-col justify-center h-100% w-[60%]">
                            <h1 className="text-[25px] font-medium -mb-2">1300</h1>
                            <h1 className="text-[15px] font-thin">Customers</h1>
                        </div>
                    </div>
                    <div className="h-24 w-[280px] border-gray-300 border-[1px] rounded-[10px] flex p-4">
                        <div className="flex justify-center items-center h-100% w-[40%]">
                            <img src={Trn} className="w-[45%]"/>
                        </div>
                        <div className="flex flex-col justify-center h-100% w-[60%]">
                            <h1 className="text-[25px] font-medium -mb-2">15</h1>
                            <h1 className="text-[15px] font-thin">Personal Trainers</h1>
                        </div>
                    </div>
                    <div className="h-24 w-[280px] border-gray-300 border-[1px] rounded-[10px] flex p-4">
                        <div className="flex justify-center items-center h-100% w-[40%]">
                            <img src={Like} className="w-[40%]"/>
                        </div>
                        <div className="flex flex-col justify-center h-100% w-[60%]">
                            <h1 className="text-[25px] font-medium -mb-2">5000+</h1>
                            <h1 className="text-[15px] font-thin">People Likes</h1>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}