// images
import StarIcon from "/images/icon-star.svg";

function StarRating({ count }) {
	return (
		<div className="flex gap-2">
			{[...Array(count)].map((_, index) => (
				<img key={index} src={StarIcon} alt="" />
			))}
		</div>
	);
}
export default StarRating;
