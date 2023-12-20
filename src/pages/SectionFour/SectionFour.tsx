import {Component} from "react";
import MainImg from "../../images/SectionFour/ImgFront.png";
import GymLogo from "../../images/SectionFour/ImgGymLogo.png"
import ClockLogo from "../../images/SectionFour/ImgClockLogo.png"
import TrainerLogo from "../../images/SectionFour/ImgTrainerLogo.png"

export class SectionFour extends Component {
    render() {
        return (
            <>
                <section className="flex pl-64 pr-64 pt-32">

                    <div className="flex-1 flex justify-center flex-col">
                        <h1 className="text-[40px] font-medium -mt-8 mt-12">Why <span
                            className="text-primary">Choose </span>Us</h1>
                        <p className="mt-1 text-gray-400">Choose us for a fitness journey like no other. Our
                            cutting-edge gym combines premium equipment, expert trainers, and a supportive community. We
                            prioritize your goals, offering personalized workouts and motivating classes. Elevate your
                            fitness experience with us, where commitment meets innovation for a healthier, stronger, and
                            happier you.</p>

                        <div className="flex flex-col mt-5">

                            <div className="flex mt-5">
                                <img src={GymLogo} className="w-[20px]"/>
                                <p className="pl-6 text-[14px]">All Equipments</p>
                            </div>

                            <div className="flex mt-5">
                                <img src={ClockLogo} className="w-[20px]"/>
                                <p className="pl-6 text-[14px]">24 Hours Service</p>
                            </div>

                            <div className="flex mt-5">
                                <img src={TrainerLogo} className="w-[22px]"/>
                                <p className="pl-6 text-[14px]">Active Personal Trainers</p>
                            </div>

                        </div>

                        <button className="border-[1px] border-gray-300 hover:bg-primary rounded-[5px] mt-12 w-[150px]">
                        <h1
                                className="text-[12px] font-medium p-2 text-black hover:text-white">Client Reviews</h1>
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img src={MainImg} className="w-[90%]"/>
                    </div>

                </section>
            </>
        );
    }
}