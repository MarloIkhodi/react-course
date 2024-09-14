import { useState } from "react";

export default function Accordion() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordinContainer">

            <div className="accordionTitle">
                <p>Novidades</p>
            </div>
            {isOpen && (<div className="accordionContent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis veniam asperiores vero quia ut delectus inventore nesciunt ad commodi. Temporibus vel totam ipsam consequatur inventore, in molestias ea odio!</p>
            </div>)}

        </div>
    )
}