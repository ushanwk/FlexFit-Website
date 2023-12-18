import {Component} from "react";

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="h-20 bg-transparent p-5 pl-64 pr-64 flex justify-between items-center">
                    <h1 className="text-[30px] font-medium">Flex<span className="text-primary">Fit</span></h1>
                    <div>
                        <nav>
                            <ul className="flex">
                                <li><a>Home</a></li>
                                <li className="pl-6"><a>About</a></li>
                                <li className="pl-6"><a>Classes</a></li>
                                <li className="pl-6"><a>Trainers</a></li>
                                <li className="pl-6"><a>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}