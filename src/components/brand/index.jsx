import "./style.css";
import Mastercard from "../../assets/images/mastercard.svg";
import Visa from "../../assets/images/visa.svg";
import Paypal from "../../assets/images/paypal.svg";
import Amex from "../../assets/images/amex.svg";

// export default function Brand({ brand }) {
//     switch (brand) {
//         case "mastercard": return (<img src={Mastercard} alt="Mastercard Ico" />)
//         case "visa": return (<img src={Visa} alt="Visa Ico" />)
//         case "paypal": return (<img src={Paypal} alt="Paypal Ico" />)
//         case "amex": return (<img src={Amex} alt="Amex Ico" />)
//         default: return console.log("invalid")
//     }
// }

const brandImages = {
    amex: Amex,
    mastercard: Mastercard,
    visa: Visa,
    paypal: Paypal,
};

export default function Brand({ brand }) {
    const imageSrc = brandImages[brand];
    return imageSrc ? (
        <img src={imageSrc} alt={`imagem da bandeira ${brand}`} />
    ) : (
        <p>Selecione uma prop de uma bandeira existente</p>
    )
}
