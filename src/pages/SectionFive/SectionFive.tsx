import {Component} from "react";

export class SectionFive extends Component {
    render() {
        return (
            <>
                <section className="bg-gray-900 mt-24 pb-32 flex text-center flex-col pl-64 pr-64">

                    <h1 className="text-[40px] font-normal mt-28 text-white">Join <span
                        className="font-bold text-primary">FITNESS CLASSES </span>Today
                    </h1>
                    <h1 className="text-[75px] font-bold text-white">PAY NOW</h1>
                    <h1 className="text-[65px] font-normal text-white">Get <span
                        className="font-bold text-primary">25% </span>Discount</h1>

                    <button className="border-[1px] border-primary hover:bg-primary rounded-[5px] mt-12 w-[200px]"><h1
                        className="text-[12px] font-medium p-2 text-white">Know About Us</h1></button>

                </section>
            </>
        );
    }
}