// props: properties

import HeadingVector from "../../../assets/icons/heading-vector.png" 
import "./style.scss"

function Heading(props) {
    // { title: "...", children: "..."}
    return ( 
        <div className="heading-wrapper">
            <img src={HeadingVector} alt="Heading Vector" />
            <h1>{ props.title }</h1>
            {/* <p>{ props.children }</p> */}
        </div>
     );
}

export default Heading;
