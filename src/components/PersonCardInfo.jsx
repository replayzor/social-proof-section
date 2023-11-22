function PersonCardInfo({ name, title, text, img, marginTop }) {
	const dynamicClass =
		marginTop === 20 ? "md:mt-7" : marginTop === 40 ? "md:mt-14" : "";

	return (
		<div
			className={`flex ${dynamicClass} md:w-[330px] flex-col mb-6 md:h-[250px] rounded-lg w-[310px] bg-primary-veryDarkMagenta`}
		>
			<div className="flex px-6 py-8">
				<img src={img} alt="" className="w-10 h-10 rounded-full" />
				<div className="flex flex-col items-start pl-6">
					<h1 className="text-white font-leagueSpartan">{name}</h1>
					<h2 className="text-primary-softPink">{title}</h2>
				</div>
			</div>
			<p className="flex pb-4 text-left px-7 font-leagueSpartan text-neutral-lightGrayishMagenta">
				&quot;{text}&quot;
			</p>
		</div>
	);
}
export default PersonCardInfo;
