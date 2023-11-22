import anne from "/images/image-anne.jpg";
import colton from "/images/image-colton.jpg";
import irene from "/images/image-irene.jpg";

export const rating = [
	{
		id: crypto.randomUUID(),
		title: "Rated 5 Stars in Reviews",
		position: "translate-x-6",
	},
	{
		id: crypto.randomUUID(),
		title: "Rated 5 Stars in Report Guru",
	},
	{
		id: crypto.randomUUID(),
		title: "Rated 5 Stars in BestTech",
	},
];

export const people = [
	{
		id: crypto.randomUUID(),
		name: "Colton Smith",
		title: "Verified Buyer",
		text: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
		img: colton,
	},
	{
		id: crypto.randomUUID(),
		name: "Irene Roberts",
		title: "Verified Buyer",
		text: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
		img: irene,
	},
	{
		id: crypto.randomUUID(),
		name: "Anne Wallace",
		title: "Verified Buyer",
		text: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
		img: anne,
	},
];
