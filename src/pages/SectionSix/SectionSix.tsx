import {Component} from "react";
import Trn1 from '../../images/SectionSix/Trn1.png'
import Trn2 from '../../images/SectionSix/Trn2.png'
import Trn3 from '../../images/SectionSix/Trn3.png'
import Trn4 from '../../images/SectionSix/Trn4.png'

export class SectionSix extends Component {
    render() {
        return (
            <>
                <section className="mt-32 pb-32 flex text-center flex-col pl-64 pr-64">

                    <h1 className="text-[30px] font-medium">Our Expert <span className="text-primary">Trainers</span></h1>
                    <h2 className="text-[15px] text-gray-400">Passionate Fitness Guide for You</h2>


                    <div className="flex justify-between mt-14">

                        <div>
                            <img src={Trn1} className="h-[250px] w-[250px] rounded-[100%] hover:border-primary hover:border-[3px]"/>
                            <h1 className="mt-8 text-[20px]">John Wick</h1>
                        </div>

                        <div>
                            <img src={Trn2} className="h-[250px] w-[250px] rounded-[100%] hover:border-primary hover:border-[3px]"/>
                            <h1 className="mt-8 text-[20px]">Salmon Brave</h1>
                        </div>

                        <div>
                            <img src={Trn4} className="h-[250px] w-[250px] rounded-[100%] hover:border-primary hover:border-[3px]"/>
                            <h1 className="mt-8 text-[20px]">Jonathan Leesa</h1>
                        </div>

                        <div>
                            <img src={Trn3} className="h-[250px] w-[250px] rounded-[100%] hover:border-primary hover:border-[3px]"/>
                            <h1 className="mt-8 text-[20px]">Brandom Maccalom</h1>
                        </div>

                    </div>

                </section>
            </>
        );
    }
}