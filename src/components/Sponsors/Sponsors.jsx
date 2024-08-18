import Sponsor from "../../assets/Images/Our Sponsors.png";
import Red from "../../assets/Images/Red.png";
import Yellow from "../../assets/Images/Yellow.png";
import Blue from "../../assets/Images/Blue.png";
import Green from "../../assets/Images/Green.png";
const Sponsors = () => {
	return (
		<div>
			<img src={Sponsor} className="w-4/5 pt-5 ml-5 md:w-1/2 md:pt-10" />
			<div className="grid grid-cols-2 gap-4 p-4 m-4 justify-items-center sm:grid-cols-4">
				<div>
					<img src={Red} className="" loading="lazy"/>
					<p className="font-bluu text-[#C90909] text-3xl sm:text-4xl text-center">
						And that's Anime
					</p>
				</div>
				<div>
					<img src={Yellow} className="" loading="lazy"/>
					<p className="font-bluu text-[#FBD702] text-3xl sm:text-4xl text-center">
						Rasoe
					</p>
				</div>
				<div>
					<img src={Blue} className="" loading="lazy"/>
					<p className="font-bluu text-[#00587E] text-3xl sm:text-4xl text-center">
						Interview Cake
					</p>
				</div>
				<div>
					<img src={Green} className="" loading="lazy"/>
					<p className="font-bluu text-[#1D7239] text-3xl sm:text-4xl text-center">
						Chocoff
					</p>
				</div>
			</div>
		</div>
	);
};
export default Sponsors;
