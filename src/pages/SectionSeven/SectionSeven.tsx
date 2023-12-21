import {Component} from "react";
import Quote from '../../images/SectionSeven/ImgQuotesLogo.png'
import Trn1 from '../../images/SectionSix/Trn1.png'
import Trn2 from '../../images/SectionSix/Trn2.png'
import Trn3 from '../../images/SectionSix/Trn3.png'

export class SectionSeven extends Component {
    render() {
        return (
            <>

                <section className="bg-gray-100 pb-28 pt-32 flex pl-64 pr-64">

                    <div className="flex-1 flex flex-col pt-2 pb-2 justify-center">
                        <img src={Quote} className="w-[50px]"/>
                        <h1 className="text-[60px] font-medium mt-5">What Our</h1>
                        <h1 className="text-[110px] font-bold -mt-7 text-primary">CLIENTS</h1>
                        <h1 className="text-[80px] font-medium -mt-9">Say</h1>
                    </div>

                    <div className="flex-1 flex flex-col gap-5 justify-center">
                        <div className="h-32 bg-white rounded-[15px] shadow-xl flex justify-center">
                            <div className="h-[100%] flex-[20%] flex items-center pl-5">
                                <img src={Trn1}
                                     className="h-[90px] w-[90px] rounded-[100%]"/>
                            </div>
                            <div className="h-[100%] flex-[80%] flex-col content-center pl-4 pt-5 pr-4">
                                <h1 className="font-medium text-primary text-[16px]">Lewis John</h1>
                                <p className="text-gray-400 text-[13px] pt-1">Exceptional gym! Clean facilities,
                                    friendly staff, and motivating atmosphere. Achieved great results. Highly recommend
                                    for a rewarding fitness experience!</p>
                            </div>
                        </div>
                        <div className="h-32 bg-white rounded-[15px] shadow-xl flex justify-center">
                            <div className="h-[100%] flex-[20%] flex items-center pl-5">
                                <img src={Trn2}
                                     className="h-[90px] w-[90px] rounded-[100%]"/>
                            </div>
                            <div className="h-[100%] flex-[80%] flex-col content-center pl-4 pt-5 pr-4">
                                <h1 className="font-medium text-primary text-[16px]">Daniel Abrahum</h1>
                                <p className="text-gray-400 text-[13px] pt-1">Exceptional gym! Clean facilities,
                                    friendly staff, and motivating atmosphere. Achieved great results. Highly recommend
                                    for a rewarding fitness experience!</p>
                            </div>
                        </div>
                        <div className="h-32 bg-white rounded-[15px] shadow-xl flex justify-center">
                            <div className="h-[100%] flex-[20%] flex items-center pl-5">
                                <img src={Trn3}
                                     className="h-[90px] w-[90px] rounded-[100%]"/>
                            </div>
                            <div className="h-[100%] flex-[80%] flex-col content-center pl-4 pt-5 pr-4">
                                <h1 className="font-medium text-primary text-[16px]">Brett Lee</h1>
                                <p className="text-gray-400 text-[13px] pt-1">Exceptional gym! Clean facilities,
                                    friendly staff, and motivating atmosphere. Achieved great results. Highly recommend
                                    for a rewarding fitness experience!</p>
                            </div>
                        </div>

                    </div>

                </section>

            </>
        );
    }
}