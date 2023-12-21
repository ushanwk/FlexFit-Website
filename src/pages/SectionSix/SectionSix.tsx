import {Component} from "react";

export class SectionSix extends Component {
    render() {
        return (
            <>
                <section className="mt-32 pb-32 flex text-center flex-col pl-64 pr-64">

                    <h1 className="text-[30px] font-medium">Our <span className="text-primary">Expert </span>Trainers
                    </h1>
                    <h2 className="text-[15px] text-gray-400">Passionate Fitness Guide for You</h2>


                    <div className="flex justify-between mt-16">

                        <div className="h-52 w-[250px] bg-primary"></div>
                        <div className="h-52 w-[250px] bg-primary"></div>
                        <div className="h-52 w-[250px] bg-primary"></div>
                        <div className="h-52 w-[250px] bg-primary"></div>

                    </div>

                </section>
            </>
        );
    }
}