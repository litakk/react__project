import Heading from "../../common/Heading";
import Diamond from "../../../assets/images/diamond.png"
import Birja from "../../../assets/images/birja.png"
import Suitcase from "../../../assets/images/suitcase.png"
import Hands from "../../../assets/images/hands.png"

function OurValues() {
    return (
        <section>
            <Heading size={2} title={"Our values"} />

            <div className="four-divs">

                <div className="stability value">
                    <img src={Diamond} alt="Diamond img" />
                    <div className="right-info">
                        <h2>Stability</h2>
                        <p>Preserving clients' capital is prioritized over profitability - each decision is weighed, deliberated, and evaluated.</p>
                    </div>
                </div>

                <div className="sustainability value">
                    <img src={Birja} alt="Birja img" />
                    <div className="right-info">
                        <h2>Sustainable</h2>
                        <p>Sustainable development is the foundation of our business model. It begins with identifying and assessing available business opportunities, followed by the consistent development of our projects and reallocating capital into new opportunities.</p>
                    </div>
                </div>

                <div className="team value">
                    <img src={Suitcase} alt="Suitcase img" />
                    <div className="right-info">
                        <h2>Team</h2>
                        <p>The Fonte Capital LTD team is the cornerstone of our success. Each employee of the company is a valuable asset in the fund's operations. Our goal is to create a work atmosphere and conditions that will enable each employee to fully realize their potential and achieve maximum results.</p>
                    </div>
                </div>

                <div className="reputation value">
                    <img src={Hands} alt="Hands img" />
                    <div className="right-info">
                        <h2>Reputation</h2>
                        <p>Responsibility and ethics are the foundation of our operations. Adhering to best practices (Corporate Code of Ethics and standards of professional conduct) enables us to offer clients high-quality investment products that meet the demanding requirements and expectations of our most discerning clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurValues;