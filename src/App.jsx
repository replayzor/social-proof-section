// components
import PersonCardInfo from "./components/PersonCardInfo";
import RatingCard from "./components/RatingCard";

import { people, rating } from "./data";
function App() {
	return (
		<main className="flex flex-col items-center justify-center md:min-h-screen">
			<article className="md:w-[1200px] flex flex-col items-center justify-center text-center md:flex-row">
				<img
					src="/images/bg-pattern-top-mobile.svg"
					alt=""
					className="relative top-32 md:hidden"
				/>
				<img
					src="/images/bg-pattern-top-desktop.svg"
					alt=""
					className="absolute hidden md:block md:left-80 md:top-40  md:translate-x-[-50%]"
				/>
				<div className="flex flex-col">
					<h1 className="text-4xl md:text-start font-bold leading-8 w-[230px] pb-6 font-leagueSpartan text-primary-veryDarkMagenta">
						10,000+ of our users love our products.
					</h1>
					<p className="w-[275px] md:w-[350px] md:text-start pb-8 text-primary-veryDarkMagenta text-[15px] font-leagueSpartan">
						We only provide great products combined with excellent customer
						service. See what our satisfied customers are saying about our
						services.
					</p>
				</div>
				<div className="md:ml-40 md:max-w-full">
					{rating.map((item, index) => (
						<RatingCard
							key={item.id}
							{...item}
							marginLeft={index === 1 ? 20 : index === 2 ? 40 : 0}
						/>
					))}
				</div>
			</article>
			<div className="flex flex-col md:-w-[1200px]">
				<section className="flex flex-col pt-8 md:flex-row md:gap-7">
					{people.map((person, index) => (
						<PersonCardInfo
							key={person.id}
							{...person}
							marginTop={index === 1 ? 20 : index === 2 ? 40 : 0}
						/>
					))}
				</section>
			</div>
		</main>
	);
}

export default App;
