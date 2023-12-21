import {Component} from "react";
import {SectionOne} from "../../pages/SectionOne/SectionOne";
import {SectionTwo} from "../../pages/SectionTwo/SectionTwo";
import {SectionThree} from "../../pages/SectionThree/SectionThree";
import {SectionFour} from "../../pages/SectionFour/SectionFour";
import {SectionFive} from "../../pages/SectionFive/SectionFive";

export class MainContent extends Component {
    render() {
        return (
            <>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
            </>
        );
    }
}