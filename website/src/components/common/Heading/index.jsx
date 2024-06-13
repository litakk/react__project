// props: properties

import HeadingVector from "../../../assets/icons/heading-vector.png"
import "./style.scss"

function Heading(props) {
    const desireSize = props.size || 1
    const fontSize = (48 / desireSize) + "px"

    // { title: "...", children: "..."}
    return (
        <div className="heading-wrapper">
            <img src={HeadingVector} alt="Heading Vector" />
            <h1 style={{ fontSize: fontSize }}> {props.title}</h1>
            {/* <p>{ props.children }</p> */}
        </div>
    );
}

export default Heading;
