function Header() {
	return (
		<header className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left sm:items-center p-4">
			{/* Logo */}
			<a className="group" href="/">
				<div className="inline-flex items-center gap-4">
					<img
						src="/src/assets/header-logo.jpg"
						alt="DevPups"
						className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 rounded-full shadow-lg"
					/>
					<p className="font-secondary text-4xl">InstaPet</p>
				</div>
			</a>
			{/* Hero copy */}
			<div className="mt-6">
				<h1 className="font-luckiest-guy text-xl text-shadow-sm">
					We've got the best pets!
				</h1>
				<p className="text-slate-600 text-shadow-lg">
					Don't take our word — let the pictures do the talking :)
				</p>
			</div>
		</header>
	);
}

export default Header;
