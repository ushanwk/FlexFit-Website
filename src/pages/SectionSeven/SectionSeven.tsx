import {Component} from "react";
import Quote from '../../images/SectionSeven/ImgQuotesLogo.png'

export class SectionSeven extends Component {
    render() {
        return (
            <>

                <section className="bg-gray-100 pb-20 pt-20 flex pl-64 pr-64">

                    <div className="flex-1 flex flex-col pt-2 pb-2 justify-center">
                        <img src={Quote} className="w-[50px]"/>
                        <h1 className="text-[60px] font-medium mt-5">What Our</h1>
                        <h1 className="text-[110px] font-bold -mt-7 text-primary">CLIENTS</h1>
                        <h1 className="text-[80px] font-medium -mt-9">Say</h1>
                    </div>

                    <div className="flex-1 flex flex-col gap-5 justify-center">
                        <div className="h-32 bg-white rounded-[15px] shadow-xl flex justify-center">
                            <div className="bg-black h-[100%] flex-[30%]"></div>
                            <div className="bg-gray-400 h-[100%] flex-[70%]"></div>
                        </div>
                    </div>

                </section>

            </>
        );
    }
}