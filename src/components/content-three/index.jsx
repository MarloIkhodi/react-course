import "./style.css"
import RelumeBig from "../../assets/images/relumebig.svg"
import Webflowbig from "../../assets/images/webflowbig.svg"

export default function ContentThree() {
    return (
        <section className="contentThree">
            <div>
                <h2>Call to action that invites visitor to try the product for free</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <form>
                    <input type="text" name="email" value="Enter your email" />
                    <input type="submit" value="Try it for free" />
                </form>
                <p className="termsThree">By clicking Sign Up you're confirming that you agree with our <a href="#">Terms and Conditions</a>.</p>
                <p>Trusted by the world's best companies [social proof to build credibility]</p>
            </div >
            <div className="threeImages">
                <img src={Webflowbig} alt="Webflow" />
                <img src={RelumeBig} alt="Relume" />
                <img src={Webflowbig} alt="Webflow" />
                <img src={RelumeBig} alt="Relume" />
                <img src={Webflowbig} alt="Webflow" />
            </div>
        </section>


    )
}