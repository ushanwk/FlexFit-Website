import {Component} from "react";
import ImgOne from '../../images/SectionEight/ImgOne.jpg'
import ImgTwo from '../../images/SectionEight/ImgTwo.jpg'
import ImgThree from '../../images/SectionEight/ImgThree.jpg'
import ImgFour from '../../images/SectionEight/ImgFour.jpg'

export class SectionEight extends Component {
    render() {
        return (
            <>

                <section className="pb-24 flex text-center flex-col pl-64 pr-64">

                    <h1 className="text-[30px] font-medium mt-24">Latest <span className="text-primary">News</span>
                    </h1>
                    <h2 className="text-[15px] text-gray-400">What's new in our Gym</h2>

                    <div className="flex justify-between items-center mt-12">

                        <div className="w-[265px] h-80 bg-white rounded-[10px] shadow-xl text-left">
                            <img src={ImgOne} className="h-40 w-[265px] rounded-[10px]"/>
                            <h1 className="pt-5 pl-5 font-medium">Yoga Beginning</h1>
                            <p className="pt-3 pl-5 pr-5 text-[12px] text-gray-400">Embark on your yoga journey with our
                                beginner-friendly classes, fostering strength, and inner peace. Discover
                                wellness at its start.</p>
                        </div>

                        <div className="w-[265px] h-80 bg-white rounded-[10px] shadow-xl text-left">
                            <img src={ImgTwo} className="h-40 w-[265px] rounded-[10px]"/>
                            <h1 className="pt-5 pl-5 font-medium">Life Saving</h1>
                            <p className="pt-3 pl-5 pr-5 text-[12px] text-gray-400">Revitalize your life with our gym's transformative programs. Experience the beginning of a healthier, stronger, and more vibrant you.</p>
                        </div>

                        <div className="w-[265px] h-80 bg-white rounded-[10px] shadow-xl text-left">
                            <img src={ImgThree} className="h-40 w-[265px] rounded-[10px]"/>
                            <h1 className="pt-5 pl-5 font-medium">Cardio Exercise</h1>
                            <p className="pt-3 pl-5 text-[12px] text-gray-400">Elevate your fitness journey with invigorating cardio exercises. Start your path to endurance, vitality, and a healthier lifestyle at our gym.</p>
                        </div>

                        <div className="w-[265px] h-80 bg-white rounded-[10px] shadow-xl text-left">
                            <img src={ImgFour} className="h-40 w-[265px] rounded-[10px]"/>
                            <h1 className="pt-5 pl-5 font-medium">New Trainers</h1>
                            <p className="pt-3 pl-5 text-[12px] text-gray-400">Exciting news! Discover fresh fitness perspectives with our new trainers. Elevate your workouts and achieve your goals with expert guidance.</p>
                        </div>

                    </div>

                </section>

            </>
        );
    }
}