import "../css/footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
	const date = new Date().getFullYear();
	return (
		<div className="footer">
			<div className="footer-grid">
				<ul className="flex">
					<li className="main-info">&nbsp;&nbsp;follow us</li>
					<li>
						<a href="https://t.me/Ebyala">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<FaTelegram /> Telegram
						</a>
					</li>
					<li>
						<a href="www.linkedin.com/in/alhamdu-bedewi-750936251">
							&nbsp;&nbsp;
							<FaLinkedin /> LinkedIn
						</a>
					</li>
					<li>
						<a href="https://app.netlify.com/">
							<FaTwitter /> twitter
						</a>
					</li>
					<li>
						<a href="https://github.com/alhamdu-e">
							<FaGithub /> github
						</a>
					</li>
				</ul>

				<ul className="flex">
					<li className="main-info">contact</li>

					<li>
						<a href="https://app.netlify.com/">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movieradar.com{" "}
						</a>
					</li>
					<li>
						{" "}
						<a href="https://app.netlify.com/">+25164676678</a>
					</li>
					<li>
						{" "}
						<a href="https://app.netlify.com/">+25160128900</a>
					</li>
					<li>
						{" "}
						<a href="https://app.netlify.com/">+2512785606</a>
					</li>
				</ul>

				<ul className="flex">
					<li className="main-info">company</li>
					<li>
						<a href="https://app.netlify.com/">&nbsp;&nbsp;services </a>
					</li>
					<li>
						<a href="https://app.netlify.com/">&nbsp;contact</a>
					</li>
					<li>
						<a href="https://app.netlify.com/">about</a>
					</li>
					<li>
						<a href="https://app.netlify.com/">home </a>
					</li>
				</ul>

				<ul className="flex">
					<li className="main-info">service</li>
					<li>
						<a href="https://app.netlify.com/">
							Ratings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</a>
					</li>
					<li>
						<a href="https://app.netlify.com/">Movie Search </a>
					</li>
					<li>
						<a href="https://app.netlify.com/">Movie Details</a>
					</li>
					<li>
						<a href="https://app.netlify.com/">
							Trailers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</a>
					</li>
				</ul>
			</div>
			<p className="copyright">
				Copyright &copy; <span className="year">{date}</span> Developed by
				Alhamdu.All right reserved
			</p>
		</div>
	);
}
export default Footer;
