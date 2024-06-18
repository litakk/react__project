import Heading from "../../common/Heading";
import Per1 from "../../../assets/images/per1.png"
import Per2 from "../../../assets/images/per2.png"
import Person from "./Person"

function OurTeam(props) {
    return (
        <section className="team-section-content-wrapper">
            <Heading size={2} title={"Our team"} />
            <p className="intro">The Fonte Capital LTD team is the cornerstone of our success. Each employee of the company is a valuable asset in the fund's operational process. Our goal is to create a working atmosphere and conditions that allow each employee to fully realize their potential to achieve maximum results.</p>

            <div className="team-content">
                <Person img={Per1} name={"Erzhan Musin"} jobTitle={CEO} />
                <Person img={Per2} name={"Olzhas Ukenov"} jobTitle={CFO} />
                <Person img={Per1} name={"Erzhan Musin"} jobTitle={CEO} />
                <Person img={Per2} name={"Olzhas Ukenov"} jobTitle={CFO} />
                <Person img={Per1} name={"Erzhan Musin"} jobTitle={CEO} />
                <Person img={Per2} name={"Olzhas Ukenov"} jobTitle={CFO} />
            </div>
        </section>
    );
}

export default OurTeam;