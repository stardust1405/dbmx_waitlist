import Faq from "~/components/faq";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Demo from "~/components/demo";
import Powered from "~/components/powered";

export default function Home() {
	return (
		<main className="mx-auto max-w-screen-2xl w-full h-full flex-1 flex flex-col">
			<Hero />
			<Demo videoSrc="/demo.mp4" thumbnailSrc="/demo.png" />
			<Powered />
			<Faq />
			<Footer />
		</main>
	);
}
