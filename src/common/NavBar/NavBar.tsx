import {Component} from "react";

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="h-20 bg-transparent p-5 pl-64 pr-64 flex justify-between items-center shadow">

                    <h1 className="text-[30px] font-medium">Flex<span className="text-primary">Fit</span></h1>

                    <div>
                        <nav>
                            <ul className="flex">
                                <li className="text-[13px] font-medium"><a>Home</a></li>
                                <li className="pl-6 text-[13px] text-gray-500"><a>About</a></li>
                                <li className="pl-6 text-[13px] text-gray-500"><a>Classes</a></li>
                                <li className="pl-6 text-[13px] text-gray-500"><a>Trainers</a></li>
                                <li className="pl-6 text-[13px] text-gray-500"><a>Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <button className="bg-primary  rounded-[5px]"><h1 className="text-[12px] font-medium p-2 text-white">Get Schedule</h1></button>
                </div>
            </>
        );
    }
}