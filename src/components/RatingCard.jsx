// components
import StarRating from "./StarRating";

function RatingCard({ title, marginLeft }) {
	return (
		<div
			className={`flex flex-col items-center justify-center gap-2 py-3 mb-5 rounded-md md:max-w-[450px] md:ml-${marginLeft} px-14 md:flex-row md:gap-2 bg-neutral-lightGrayishMagenta`}
		>
			<StarRating count={5} />
			<p className="font-bold text-primary-veryDarkMagenta font-leagueSpartan">
				{title}
			</p>
		</div>
	);
}
export default RatingCard;
