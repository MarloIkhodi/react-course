import "./style.css";
import Placeholder from "../../assets/images/placeholder.svg";

export default function Content() {
    return (
        <container>

            <div className="leftSide">
                <h2>Resonate with the visitor's problem</h2>
                <p>Describe exactly what your product or service does to solve this problem. <br></br>
                    Avoid using verbose words or phrases.</p>
                <form>
                    <input className="email" type="text" id="email" name="email" value="Enter your email" />
                    <input className="submit" type="submit" value="Try it for free" />
                </form>
                <p className="termsConditions">By clicking Sign Up you're confirming that you agree with our <a className="termsConditions" href="#">Terms and Conditions</a>.</p>
            </div>
            <img src={Placeholder} alt="Placeholder" />
        </container >
    );
}