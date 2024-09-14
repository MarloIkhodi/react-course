import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import "./style.css";

export default function Accordion() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordinContainer">

            <div className="accordionTitle">
                <p>Novidades</p>
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <ChevronUp /> : <ChevronDown />}</button>
            </div>
            {isOpen && (<div className="accordionContent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis veniam asperiores vero quia ut delectus inventore nesciunt ad commodi. Temporibus vel totam ipsam consequatur inventore, in molestias ea odio!</p>
            </div>)}

        </div>
    )
}