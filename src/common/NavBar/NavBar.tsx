import {Component} from "react";

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="w-[100%] h-20 p-5 pl-64 pr-64 flex justify-between items-center fixed z-50 bg-gray-900 border-b-2 border-primary">

                    <h1 className="text-[25px] font-medium text-white">Flex<span className="text-primary">Fit</span></h1>

                    <div>
                        <nav>
                            <ul className="flex">
                                <li className="text-[13px] font-medium text-white"><a>Home</a></li>
                                <li className="pl-6 text-[13px] text-gray-200"><a>About</a></li>
                                <li className="pl-6 text-[13px] text-gray-200"><a>Classes</a></li>
                                <li className="pl-6 text-[13px] text-gray-200"><a>Trainers</a></li>
                                <li className="pl-6 text-[13px] text-gray-200"><a>Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <button className="bg-primary  rounded-[5px]"><h1 className="text-[12px] font-medium p-2 text-white">Get Schedule</h1></button>
                </div>
            </>
        );
    }
}