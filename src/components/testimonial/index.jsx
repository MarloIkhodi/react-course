import "./styles.css";
import Stars from "../../assets/images/stars.svg";
import Avatar from "../../assets/images/avatar.svg";
import Webflow from "../../assets/images/webflow.svg";

export default function Testimonial({ message = "Customers commentary", userid, subuserid, photo = Avatar, icon = Webflow, iconAlt = "No Icon" }) {
    return (
        <section className="testimonial">
            <div className="allBox">
                <img className="ratingImage" src={Stars} alt="5 stars" />
                <h5>{message}</h5>
                <div className="bottomName">
                    <img src={photo} alt={userid} />
                    <div className="nameSubname">
                        <p>{userid}</p>
                        <p>{subuserid} </p>
                    </div>
                    <p className="lineBetween"></p>
                    <img src={icon} alt={iconAlt} />
                </div>
            </div>
        </section>
    )
}