import './Accordion.scss'
import { useState } from 'react'


const Accordion = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h4>{props.title}</h4>
            {isOpen && (<div> </div>)}
        </div>
    )
}

export default Accordion