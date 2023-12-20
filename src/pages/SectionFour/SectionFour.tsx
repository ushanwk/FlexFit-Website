import {Component} from "react";
import MainImg from "../../images/SectionFour/ImgFront.png";

export class SectionFour extends Component {
    render() {
        return (
            <>
                <section className="flex pl-64 pr-64 pt-32">

                    <div className="flex-1 flex justify-center flex-col">
                        <h1 className="text-[40px] font-medium -mt-8">Why <span
                            className="text-primary">Choose </span>Us</h1>
                        <p className="mt-1 text-gray-400">Choose us for unparalleled fitness excellence. Our
                            state-of-the-art gym offers top-notch equipment, expert trainers, and a motivating
                            atmosphere to help you achieve your health and wellness goals.</p>

                        <button className="border-[1px] border-gray-300 hover:bg-primary rounded-[5px] mt-12 w-[150px]">
                            <h1
                                className="text-[12px] font-medium p-2 text-black hover:text-white">Client Reviews</h1>
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img src={MainImg} className="w-[85%]"/>
                    </div>

                </section>
            </>
        );
    }
}