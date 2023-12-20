import {Component} from "react";
import Yoga from '../../images/SectionThree/ImgYoga.jpg'
import Cal from '../../images/SectionThree/ImgCalender.png'
import Clock from '../../images/SectionThree/ImgClock.png'
import Run from '../../images/SectionThree/ImgRun.jpg'
import Free from '../../images/SectionThree/ImgFreeHand.jpg'

export class SectionThree extends Component {
    render() {
        return (
            <>
                <section className="bg-gray-100 mt-24 pb-24 flex text-center flex-col pl-64 pr-64">

                    <h1 className="text-[30px] font-medium mt-16">Our <span className="text-primary">Special </span>Sessions
                    </h1>
                    <h2 className="text-[15px] text-gray-400">Special Sessions conducted by our Trainers</h2>

                    <div className="flex justify-between items-center mt-12">

                        <div className="w-[350px] h-96 bg-white rounded-[10px] shadow-xl text-left">
                            <div className="w-[350px] h-56 rounded-[10px]">
                                <img src={Yoga} className="w-[100%] rounded-[10px]"/>
                            </div>
                            <h1 className="ml-9 mt-9 text-[18px]">Yoga Session</h1>
                            <div className="ml-9 flex pt-4 pl-1">
                                <img src={Cal} className="w-[6%]"/>
                                <h2 className="text-[15px] text-gray-400 pl-3">30 January 2023</h2>
                            </div>
                            <div className="ml-9 flex pt-4 pl-1">
                                <img src={Clock} className="w-[6%] h-[6%]"/>
                                <h2 className="text-[15px] text-gray-400 pl-3">12.00 pm - 3.00 pm</h2>
                            </div>
                        </div>

                        <div className="w-[350px] h-96 bg-white rounded-[10px] shadow-xl text-left">
                            <div className="w-[350px] h-56 rounded-[10px]">
                                <img src={Run} className="w-[100%] rounded-[10px]"/>
                            </div>
                            <h1 className="ml-9 mt-9 text-[18px]">Running Session</h1>
                            <div className="ml-9 flex pt-4 pl-1">
                                <img src={Cal} className="w-[6%]"/>
                                <h2 className="text-[15px] text-gray-400 pl-3">25 January 2023</h2>
                            </div>
                            <div className="ml-9 flex pt-4 pl-1">
                                <img src={Clock} className="w-[6%] h-[6%]"/>
                                <h2 className="text-[15px] text-gray-400 pl-3">1.00 pm - 5.00 pm</h2>
                            </div>
                        </div>

                        <div className="w-[350px] h-96 bg-white rounded-[10px] shadow-xl text-left">
                            <div className="w-[350px] h-56 rounded-[10px]">
                                <img src={Free} className="w-[100%] rounded-[10px]"/>
                            </div>
                            <h1 className="ml-9 mt-9 text-[18px]">Free Hand Session</h1>
                            <div className="ml-9 flex pt-4 pl-1">
                                <img src={Cal} className="w-[6%]"/>
                                <h2 className="text-[15px] text-gray-400 pl-3">03 February 2023</h2>
                            </div>
                            <div className="ml-9 flex pt-4 pl-1">
                                <img src={Clock} className="w-[6%] h-[6%]"/>
                                <h2 className="text-[15px] text-gray-400 pl-3">2.00 pm - 7.00 pm</h2>
                            </div>
                        </div>


                    </div>

                </section>
            </>
        );
    }
}