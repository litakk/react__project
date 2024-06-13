import Heading from "../../common/Heading"
import AboutImg from "../../../assets/images/about_img.png"
import Lycence from "../../../assets/icons/lycence.png"

function About(props) {
    return (
        <div className="about-section">
            <Heading size={2} title="About us" />

            <div className="about-content">
                <img className="about-page-image" src={AboutImg} alt="About us" />
                <div className="info">
                    <p>Our Team successfully operates in multiple investment markets. The wealth of choice in tools within these markets allows Us to effectively preserve and grow clients' capital.</p>
                    <p>Partnership with Fonte is open to both professional investors and individuals who are just beginning to explore new opportunities. Our jurisdiction is the International Financial Center 'Astana' (IFCA). Comfortable tax conditions and regulatory policies provide the necessary freedom and advantages to achieve investment goals.</p>
                    <p>In partnership with Fonte Capital LTD, investors have the opportunity to not only utilize proven strategies but also collaborate on developing personalized investment solutions.</p>
                    <button className="btn btn-warning">
                        <img src={Lycence} alt="Lycence image" />Licenses
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;