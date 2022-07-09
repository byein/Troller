import { GeneralRank, ProRank } from "../../components/home/rank";
import Search from "../../components/home/search";
import Title from "../../components/home/title";
import { HomeWrapper, Section } from "../../styles/home/home";

function Home() {
	return (
		<HomeWrapper>
			<Title />
			<Search />
			<Section>
				<GeneralRank />
				<ProRank />
			</Section>
		</HomeWrapper>
	);
}
export default Home;
