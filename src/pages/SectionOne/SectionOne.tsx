import {Component} from "react";
import MainImg from '../../images/SectionOne/ImgFront.png'

export class SectionOne extends Component {
    render() {
        return (
            <>
                <section className="bg-gray-900">
                    <div className="flex pl-64 pr-64 pt-36">
                        <div className="bg-gray-200 flex-1">

                        </div>
                        <div className="flex-1">
                            <img src={MainImg} className="w-[500px]"/>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}