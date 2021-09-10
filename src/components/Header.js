import { ReactComponent as MobileHero } from "../images/bg-hero-mobile.svg";
import { ReactComponent as DesktopHero } from "../images/bg-hero-desktop.svg";

const Header = () => {
	return (
		<header className="header-bg">
			<nav className="header-bg__navbar">
				<span className="logo"></span>
				<button>Try it free</button>
			</nav>

			<div className="header-bg__hero">
				<div className="header-bg__hero__message">
					<h1>Build The Community Your Fans Will Love</h1>
					<p>
						Huddle re-imagines the way we build communities. You have a voice,
						but so does your audience. Create connections with your users as you
						engage in genuine discussion.{" "}
					</p>
					<button> Get Started For Free</button>
				</div>

				<div className="header-bg__hero__mockup"></div>
			</div>

			<MobileHero className="header-bg__m-hero" />
			<DesktopHero className="header-bg__d-hero" />
		</header>
	);
};

export default Header;
