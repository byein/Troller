import { ResultProps } from "../../pages/fullSearch/fullSearch";
import {
	FlexDiv,
	RecordItemAction,
	RecordItemGame,
	RecordItemInfo,
	RecordItemInfoWrapper,
	RecordItemLi,
	RecordItemParticipants,
	RecordItemUl,
	RecordItemWrapper,
	RecordsWrapper,
} from "../../styles/fullSearch/recordList";

interface RecordProps {
	result: string;
	death: string;
	csPerMinutes: string;
	playtime: string;
	semiRuneImg: string;
	primaryRune: string;
	spell2img: string;
	championUI: string;
	win: boolean;
	spell2: string;
	spell1: string;
	averageTier: string;
	semiRune: string;
	visionWard: string;
	kda: string;
	kill: string;
	killRate: string;
	cs: string;
	championName: string;
	spell1img: string;
	lastPlayTime: string;
	assist: string;
	primaryRuneImg: string;
	gameMode: string;
	itemArray: {
		item: string;
		itemImg: string;
	}[];
	players: {
		championImg: string;
		lolName: string;
		championName: string;
		Position: string;
		team: string;
	}[];
}

function RecordItem({
	assist,
	averageTier,
	championName,
	championUI,
	cs,
	csPerMinutes,
	death,
	gameMode,
	itemArray,
	kda,
	kill,
	killRate,
	lastPlayTime,
	players,
	playtime,
	primaryRune,
	primaryRuneImg,
	result,
	semiRune,
	semiRuneImg,
	spell1,
	spell1img,
	spell2,
	spell2img,
	visionWard,
	win,
}: RecordProps) {
	return (
		<RecordItemLi>
			<RecordItemWrapper result={result}>
				<RecordItemGame result={result}>
					<div className="result">
						{result === WINLOSE.WIN ? "승리" : "패배"}
					</div>
					<div className="time-stamp">
						<div>{lastPlayTime}</div>
					</div>
					<div className="bar" />
					<div className="type">{gameMode}</div>
					<div className="length">{playtime}</div>
				</RecordItemGame>
				<RecordItemInfo>
					<FlexDiv result={result}>
						<RecordItemInfoWrapper>
							<FlexDiv result={result}>
								<div className="champion">
									<div className="icon">
										<img
											src={championUI}
											width={"48"}
											alt={championName}
											height="48"
										/>
										<span className="champion-level">00</span>
									</div>
								</div>
								<div className="spells">
									<div className="spell">
										{spell1img !== undefined ? (
											<img src={spell1img} width="22" alt={spell1} />
										) : (
											<div
												style={{
													width: 22,
													height: 22,
													borderRadius: 6,
													backgroundColor: "#ffffff",
												}}
											/>
										)}
									</div>
									<div className="spell">
										{spell2img !== undefined ? (
											<img src={spell2img} width="22" alt={spell2} />
										) : (
											<div
												style={{
													width: 22,
													height: 22,
													borderRadius: 6,
													backgroundColor: "#ffffff",
												}}
											/>
										)}
									</div>
								</div>
								<div className="runes">
									<div className="rune">
										{primaryRuneImg !== undefined ? (
											<img src={primaryRuneImg} width="22" alt={primaryRune} />
										) : (
											<div
												style={{
													width: 22,
													height: 22,
													borderRadius: 6,
													backgroundColor: "#ffffff",
												}}
											/>
										)}
									</div>
									<div className="rune">
										{semiRuneImg !== undefined ? (
											<img src={semiRuneImg} width="22" alt={semiRune} />
										) : (
											<div
												style={{
													width: 22,
													height: 22,
													borderRadius: 6,
													backgroundColor: "#ffffff",
												}}
											/>
										)}
									</div>
								</div>
							</FlexDiv>
						</RecordItemInfoWrapper>
						<div className="kda">
							<div className="k-d-a">
								<span>{kill}</span> / <span className="d">{death}</span> /{" "}
								<span>{assist}</span>
							</div>
							<div className="ratio">
								<span>{kda}:1 </span>
								평점
							</div>
						</div>

						<div className="stats">
							<div className="p-kill">
								<div>킬관여 {killRate}</div>
							</div>
							<div className="ward">제어와드 {visionWard}</div>
							<div className="cs">
								CS {cs} ({csPerMinutes})
							</div>
							<div className="average-tier">{averageTier}</div>
						</div>
					</FlexDiv>
					<FlexDiv result={result}>
						<div className="items">
							<ul>
								{itemArray.map((i, index) => {
									if (index === 6) {
										return <></>;
									}
									return i.item !== "None" ? (
										<li>
											<img src={i.itemImg} width="22" alt={i.item} />
										</li>
									) : (
										<li></li>
									);
								})}
							</ul>
							<div className="ward">
								{itemArray[6].item !== "None" ? (
									<img
										src={itemArray[6].itemImg}
										width="22"
										alt={itemArray[6].item}
									/>
								) : (
									<></>
								)}
							</div>
						</div>
					</FlexDiv>
				</RecordItemInfo>
				<RecordItemParticipants>
					<ul>
						<li>
							<div className="icon">
								<img
									src={players[0].championImg}
									width="16"
									alt={players[0].championName}
								/>
							</div>
							<div className="name">{players[0].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[1].championImg}
									width="16"
									alt={players[1].championName}
								/>
							</div>
							<div className="name">{players[1].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[2].championImg}
									width="16"
									alt={players[2].championName}
								/>
							</div>
							<div className="name">{players[2].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[3].championImg}
									width="16"
									alt={players[3].championName}
								/>
							</div>
							<div className="name">{players[3].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[4].championImg}
									width="16"
									alt={players[4].championName}
								/>
							</div>
							<div className="name">{players[4].lolName}</div>
						</li>
					</ul>
					<ul>
						<li>
							<div className="icon">
								<img
									src={players[5].championImg}
									width="16"
									alt={players[5].championName}
								/>
							</div>
							<div className="name">{players[5].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[6].championImg}
									width="16"
									alt={players[6].championName}
								/>
							</div>
							<div className="name">{players[6].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[7].championImg}
									width="16"
									alt={players[7].championName}
								/>
							</div>
							<div className="name">{players[7].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[8].championImg}
									width="16"
									alt={players[8].championName}
								/>
							</div>
							<div className="name">{players[8].lolName}</div>
						</li>
						<li>
							<div className="icon">
								<img
									src={players[9].championImg}
									width="16"
									alt={players[9].championName}
								/>
							</div>
							<div className="name">{players[9].lolName}</div>
						</li>
					</ul>
				</RecordItemParticipants>
				<RecordItemAction result={result}>
					<button type="button" className="detail">
						{result === "LOSE" ? (
							<img
								src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-red.svg?v=1657538065312"
								width="24"
								alt="More"
								height="24"
							/>
						) : (
							<img
								src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-blue.svg?v=1657538065312"
								width="24"
								alt="More"
								height="24"
							/>
						)}
					</button>
				</RecordItemAction>
			</RecordItemWrapper>
		</RecordItemLi>
	);
}

enum WINLOSE {
	WIN = "WIN",
	LOSE = "LOSE",
}

function RecordList({ resultData }: { resultData: ResultProps | undefined }) {
	return (
		<RecordsWrapper>
			<RecordItemUl>
				{resultData !== undefined ? (
					resultData.gameRecord?.gameRecord.map((item) => (
						<RecordItem
							result={item.win === true ? WINLOSE.WIN : WINLOSE.LOSE}
							death={item.death}
							csPerMinutes={item.csPerMinutes}
							playtime={item.playtime}
							semiRuneImg={item.semiRuneImg}
							primaryRune={item.primaryRune}
							spell2img={item.spell2img}
							championUI={item.championUI}
							win={item.win}
							spell2={item.spell2}
							spell1={item.spell1}
							averageTier={item.averageTier}
							semiRune={item.semiRune}
							visionWard={item.visionWard}
							kda={item.kda}
							kill={item.kill}
							killRate={item.killRate}
							cs={item.cs}
							championName={item.championName}
							spell1img={item.spell1img}
							lastPlayTime={item.lastPlayTime}
							assist={item.assist}
							primaryRuneImg={item.primaryRuneImg}
							gameMode={item.gameMode}
							itemArray={item.itemArray}
							players={item.players}
						/>
					))
				) : (
					<></>
				)}
			</RecordItemUl>
		</RecordsWrapper>
	);
}
export default RecordList;
