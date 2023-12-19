import {Component} from "react";
import MainImg from '../../images/SectionOne/ImgFront.png'

export class SectionOne extends Component {
    render() {
        return (
            <>
                <section className="bg-gray-900">
                    <div className="flex pl-64 pr-64 pt-36">

                        <div className="flex-1 flex justify-center flex-col">
                            <h1 className="text-[100px] font-black text-primary">CHALLENGE</h1>
                            <h1 className="text-[75px] font-medium text-white -mt-10">YOUR LIMITS</h1>
                            <p className="mt-1 text-gray-400">Modern gym equipped with state-of-the-art fitness machines, free weights, and cardio equipment. Offers diverse classes, experienced trainers, and a vibrant atmosphere for individuals seeking a healthy lifestyle and fitness goals.</p>

                            <div className="w-[280px] mt-14 flex justify-between">
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary"></div>
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary"></div>
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary"></div>
                                <div
                                    className="w-[50px] h-[50px] rounded-[100%] border-[1px] border-gray-500 hover:bg-primary"></div>
                            </div>
                        </div>

                        <div className="flex-1">
                        <img src={MainImg} className="w-[550px]"/>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}