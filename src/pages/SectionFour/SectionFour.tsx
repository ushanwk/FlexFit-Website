import {Component} from "react";
import ImgBg from '../../images/SectionFour/ImgBg.jpg'

export class SectionFour extends Component {
    render() {
        return (
            <>
               <section className="h-[500px]">
                    <img src={ImgBg}/>
               </section>
            </>
        );
    }
}