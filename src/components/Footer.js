import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Location } from "../images/icon-location.svg";
import { ReactComponent as Phone } from "../images/icon-phone.svg";
import { ReactComponent as Email } from "../images/icon-email.svg";

const Footer = () => {
	return (
		<footer className="footer-bg">
			<div className="footer-bg__cta">
				<h6> Ready To Build Your Community?</h6>
				<button> Get Started For Free</button>
			</div>
			<Logo className="company-logo" />

			<div className="footer-bg__flex">
				<div className="footer-bg__flex__contact">
					<div className="footer-bg__flex__contact__address">
						<Location />
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</span>
					</div>
					<div className="footer-bg__flex__contact__phone">
						<Phone />
						<span> +1-543-123-4567</span>
					</div>
					<div className="footer-bg__flex__contact__email">
						<Email />
						<span> example@huddle.com</span>
					</div>
				</div>

				<div className="footer-bg__flex__links">
					<div className="footer-bg__flex__links__first">
						<a href="#">About Us</a>
						<a href="#">What We Do</a>
						<a href="#">FAQ</a>
					</div>
					<div className="footer-bg__flex__links__sec">
						<a href="#">Career</a>
						<a href="#">Blog</a>
						<a href="#">Contact Us</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
