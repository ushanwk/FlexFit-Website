import {Component} from "react";
import MainImg from '../../images/SectionOne/ImgFront.png'
import MainImg2 from '../../images/SectionOne/ImgFront2.png'
import XImg from '../../images/SectionOne/twitter.png'
import FbImg from '../../images/SectionOne/facebook.png'
import InsterImg from '../../images/SectionOne/instagram.png'
import LinkedInImg from '../../images/SectionOne/linkedin.png'

export class SectionOne extends Component {
    render() {
        return (
            <>
                <section className="bg-gray-900">
                    <div className="flex pl-64 pr-64 pt-36">

                        <div className="flex-1 flex justify-center flex-col">
                            <h1 className="text-[100px] font-black text-primary">CHALLENGE</h1>
                            <h1 className="text-[75px] font-medium text-white -mt-10">YOUR LIMITS</h1>
                            <p className="mt-1 text-gray-400">Modern gym equipped with state-of-the-art fitness
                                machines, free weights, and cardio equipment. Offers diverse classes, experienced
                                trainers, and a vibrant atmosphere for individuals seeking a healthy lifestyle and
                                fitness goals.</p>

                            <div className="w-[230px] mt-14 flex justify-between">
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary flex items-center justify-center">
                                    <img src={XImg} className="w-[13px]"/></div>
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary flex items-center justify-center">
                                    <img src={LinkedInImg} className="w-[15px]"/></div>
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary flex items-center justify-center">
                                    <img src={InsterImg} className="w-[15px]"/></div>
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary flex items-center justify-center">
                                    <img src={FbImg} className="w-[15px]"/></div>
                            </div>

                            <button className="border-[1px] border-primary hover:bg-primary rounded-[5px] mt-12 w-[200px]"><h1
                                className="text-[12px] font-medium p-2 text-white">Know About Us</h1></button>

                        </div>

                        <div className="flex-1">
                            <img src={MainImg2} className="w-[550px]"/>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}