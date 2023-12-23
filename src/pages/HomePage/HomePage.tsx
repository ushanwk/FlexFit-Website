import {Component} from "react";
import {SectionOne} from "../../sections/SectionOne/SectionOne";
import {SectionTwo} from "../../sections/SectionTwo/SectionTwo";
import {SectionThree} from "../../sections/SectionThree/SectionThree";
import {SectionFour} from "../../sections/SectionFour/SectionFour";
import {SectionFive} from "../../sections/SectionFive/SectionFive";
import {SectionSix} from "../../sections/SectionSix/SectionSix";
import {SectionSeven} from "../../sections/SectionSeven/SectionSeven";
import {SectionEight} from "../../sections/SectionEight/SectionEight";

export class HomePage extends Component {
    render() {
        return (
            <>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
                <SectionSix/>
                <SectionSeven/>
                <SectionEight/>
            </>
        );
    }
}