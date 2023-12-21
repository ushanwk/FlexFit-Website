import {Component} from "react";

export class SectionSix extends Component {
    render() {
        return (
            <>
                <section className="mt-32 pb-32 flex text-center flex-col pl-64 pr-64">

                    <h1 className="text-[30px] font-medium">Our <span className="text-primary">Expert </span>Trainers
                    </h1>
                    <h2 className="text-[15px] text-gray-400">Passionate Fitness Guide for You</h2>


                    <div className="flex justify-between mt-20">

                        <div>
                            <div className="h-[250px] w-[250px] bg-primary rounded-[100%]"></div>
                            <h1 className="mt-8 text-[18px]">Ushan Kaushalya</h1>
                        </div>

                        <div>
                            <div className="h-[250px] w-[250px] bg-primary rounded-[100%]"></div>
                            <h1 className="mt-8 text-[18px]">Jaith Kaushalya</h1>
                        </div>

                        <div>
                            <div className="h-[250px] w-[250px] bg-primary rounded-[100%]"></div>
                            <h1 className="mt-8 text-[18px]">Vishwa Kaushalya</h1>
                        </div>

                        <div>
                            <div className="h-[250px] w-[250px] bg-primary rounded-[100%]"></div>
                            <h1 className="mt-8 text-[18px]">Tharushika Nishamani</h1>
                        </div>


                    </div>

                </section>
            </>
        );
    }
}