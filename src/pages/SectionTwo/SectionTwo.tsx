import {Component} from "react";
import MainImg from '../../images/SectionTwo/ImgFront.png'

export class SectionTwo extends Component {
    render() {
        return (
            <>
                <section className="flex pl-64 pr-64 pt-32">

                    <div className="flex-1 flex justify-center">
                        <img src={MainImg} className="w-[70%]"/>
                    </div>

                    <div className="flex-1 flex justify-center flex-col">
                        <h1 className="text-[40px] font-medium -mt-8">What We <span
                            className="text-primary">OFFER</span></h1>
                        <p className="mt-1 text-gray-400">Modern gym equipped with state-of-the-art fitness
                            machines, free weights, and cardio equipment. Offers diverse classes, experienced
                            trainers, and a vibrant atmosphere for individuals seeking a healthy lifestyle and
                            fitness goals.</p>
                        <button className="border-[1px] border-gray-300 hover:bg-primary rounded-[5px] mt-12 w-[150px]">
                            <h1
                                className="text-[12px] font-medium p-2 text-black hover:text-white">Contact Us</h1></button>
                    </div>

                </section>
            </>
        );
    }
}