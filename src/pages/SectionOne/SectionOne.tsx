import {Component} from "react";
import BgImg from '../../images/SectionOne/BgImg.jpg'

export class SectionOne extends Component {
    render() {
        return (
            <>
                <section className="bg-cover bg-center">
                    <img src={BgImg} className="h-[100vh] w-[100vw]"/>
                </section>
            </>
        );
    }
}