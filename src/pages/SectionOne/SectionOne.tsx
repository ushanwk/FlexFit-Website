import {Component} from "react";
import MainImg from '../../images/SectionOne/ImgFront.png'

export class SectionOne extends Component {
    render() {
        return (
            <>
                <section className="bg-gray-900">
                    <div className="flex pl-64 pr-64 pt-36">

                        <div className="flex-1 flex justify-center flex-col">
                            <h1 className="text-[80px] font-black text-white">CHALLENGE</h1>
                            <h1 className="text-[80px] font-bold text-white">YOUR <span className="text-primary">LIMITS</span></h1>
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