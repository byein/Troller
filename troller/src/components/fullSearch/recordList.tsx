import axios from "axios";
import { useEffect, useState } from "react";
import delayFetcher from "../../hooks/search/delayFetcher";
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
import { IResultType } from "../multiSearch/searchBox";

interface ResultProps {
	result: string;
	death: string;
	csPerMiutes: string;
	playtime: string;
	semiRuneImg: string;
	primaryRune: string;
	spell2img: string;
	championUI: string;
	win: false;
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
	itemArray: [
		{
			item0: string;
			item0Img: string;
		},
		{
			item1: string;
			item1Img: string;
		},
		{
			item2: string;
			item2Img: string;
		},
		{
			item3Img: string;
			item3: string;
		},
		{
			item4Img: string;
			item4: string;
		},
		{
			item5: string;
			item5Img: string;
		},
		{
			item6Img: string;
			item6: string;
		}
	];
	players: [
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		},
		{
			championImg: string;
			lolName: string;
			championName: string;
			Position: string;
			team: string;
		}
	];
}

function RecordItem({
	assist,
	averageTier,
	championName,
	championUI,
	cs,
	csPerMiutes,
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
}: ResultProps) {
	// let result = "LOSE";
	return (
		<RecordItemLi>
			<RecordItemWrapper result={result}>
				<RecordItemGame result={result}>
					<div className="type">{gameMode}</div>
					<div className="time-stamp">
						<div>{lastPlayTime}</div>
					</div>
					<div className="bar" />
					<div className="result">{result}</div>
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
										<img src={spell1img} width="22" alt={spell1} />
									</div>
									<div className="spell">
										<img src={spell2img} width="22" alt={spell2} />
									</div>
								</div>
								<div className="runes">
									<div className="rune">
										<img src={primaryRuneImg} width="22" alt={primaryRune} />
									</div>
									<div className="rune">
										<img src={semiRuneImg} width="22" alt={semiRune} />
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
								<div>킬관여 {killRate}%</div>
							</div>
							<div className="ward">제어와드 {visionWard}</div>
							<div className="cs">
								CS {cs} ({csPerMiutes})
							</div>
							<div className="average-tier">{averageTier}</div>
						</div>
					</FlexDiv>
					<FlexDiv result={result}>
						<div className="items">
							<ul>
								<li>
									<img
										src={itemArray[0].item0Img}
										width="22"
										alt={itemArray[0].item0}
									/>
								</li>
								<li>
									<img
										src={itemArray[1].item1Img}
										width="22"
										alt={itemArray[1].item1}
									/>
								</li>
								<li>
									<img
										src={itemArray[2].item2Img}
										width="22"
										alt={itemArray[2].item2}
									/>
								</li>
								<li>
									<img
										src={itemArray[3].item3Img}
										width="22"
										alt={itemArray[3].item3}
									/>
								</li>
								<li>
									<img
										src={itemArray[4].item4Img}
										width="22"
										alt={itemArray[4].item4}
									/>
								</li>
								<li>
									<img
										src={itemArray[5].item5Img}
										width="22"
										alt={itemArray[5].item5}
									/>
								</li>
							</ul>
							<div className="ward">
								<img
									src={itemArray[6].item6Img}
									width="22"
									alt={itemArray[6].item6}
								/>
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

function RecordList() {
	const arr: WINLOSE[] = [
		WINLOSE.WIN,
		WINLOSE.LOSE,
		WINLOSE.WIN,
		WINLOSE.WIN,
		WINLOSE.WIN,
		WINLOSE.WIN,
		WINLOSE.LOSE,
		WINLOSE.LOSE,
		WINLOSE.LOSE,
		WINLOSE.LOSE,
		WINLOSE.WIN,
		WINLOSE.LOSE,
		WINLOSE.WIN,
		WINLOSE.WIN,
		WINLOSE.WIN,
		WINLOSE.WIN,
		WINLOSE.LOSE,
		WINLOSE.LOSE,
		WINLOSE.LOSE,
		WINLOSE.LOSE,
	];
	const [userLoLName, setUserLoLName] = useState("hideonpush");
	const [gameRecord, setGameRecord] = useState<ResultProps>({
		result: "",
		death: "",
		csPerMiutes: "",
		playtime: "",
		semiRuneImg: "",
		primaryRune: "",
		spell2img: "",
		championUI: "",
		win: false,
		spell2: "",
		spell1: "",
		averageTier: "",
		semiRune: "",
		visionWard: "",
		kda: "",
		kill: "",
		killRate: "",
		cs: "",
		championName: "",
		spell1img: "",
		lastPlayTime: "",
		assist: "",
		primaryRuneImg: "",
		gameMode: "",
		itemArray: [
			{
				item0: "",
				item0Img: "",
			},
			{
				item1: "",
				item1Img: "",
			},
			{
				item2: "",
				item2Img: "",
			},
			{
				item3Img: "",
				item3: "",
			},
			{
				item4Img: "",
				item4: "",
			},
			{
				item5: "",
				item5Img: "",
			},
			{
				item6Img: "",
				item6: "",
			},
		],
		players: [
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
			{
				championImg: "",
				lolName: "",
				championName: "",
				Position: "",
				team: "",
			},
		],
	});
	const [resultData, setResultData] = useState<IResultType>();

	// useEffect(() => {
	// 	axios
	// 		.get("/api/search/user/gameRecord", {
	// 			params: {
	// 				lolName: userLoLName,
	// 			},
	// 		})
	// 		.then(async (response) => {
	// 			const data = await response.data;
	// 			console.log("20: " + data);
	// 			await setGameRecord({
	// 				result: data.gameRecord.win === true ? "WIN" : "LOSE",
	// 				death: data.gameRecord.death,
	// 				csPerMiutes: data.gameRecord.csPerMiutes,
	// 				playtime: data.gameRecord.playtime,
	// 				semiRuneImg: data.gameRecord.semiRuneImg,
	// 				primaryRune: data.gameRecord.primaryRune,
	// 				spell2img: data.gameRecord.spell2img,
	// 				championUI: data.gameRecord.championUI,
	// 				win: data.gameRecord.win,
	// 				spell2: data.gameRecord.spell2,
	// 				spell1: data.gameRecord.spell1,
	// 				averageTier: data.gameRecord.averageTier,
	// 				semiRune: data.gameRecord.semiRune,
	// 				visionWard: data.gameRecord.visionWard,
	// 				kda: data.gameRecord.kda,
	// 				kill: data.gameRecord.kill,
	// 				killRate: data.gameRecord.killRate,
	// 				cs: data.gameRecord.cs,
	// 				championName: data.gameRecord.championName,
	// 				spell1img: data.gameRecord.spell1img,
	// 				lastPlayTime: data.gameRecord.lastPlayTime,
	// 				assist: data.gameRecord.assist,
	// 				primaryRuneImg: data.gameRecord.primaryRuneImg,
	// 				gameMode: data.gameRecord.gameMode,
	// 				itemArray: [
	// 					{
	// 						item0: data.gameRecord.itemArray.item0,
	// 						item0Img: data.gameRecord.itemArray.item0Img,
	// 					},
	// 					{
	// 						item1: data.gameRecord.itemArray.item1,
	// 						item1Img: data.gameRecord.itemArray.item1Img,
	// 					},
	// 					{
	// 						item2: data.gameRecord.itemArray.item2,
	// 						item2Img: data.gameRecord.itemArray.item2Img,
	// 					},
	// 					{
	// 						item3: data.gameRecord.itemArray.item3,
	// 						item3Img: data.gameRecord.itemArray.item3Img,
	// 					},
	// 					{
	// 						item4: data.gameRecord.itemArray.item4,
	// 						item4Img: data.gameRecord.itemArray.item4Img,
	// 					},
	// 					{
	// 						item5: data.gameRecord.itemArray.item5,
	// 						item5Img: data.gameRecord.itemArray.item5Img,
	// 					},
	// 					{
	// 						item6: data.gameRecord.itemArray.item6,
	// 						item6Img: data.gameRecord.itemArray.item6Img,
	// 					},
	// 				],
	// 				players: [
	// 					{
	// 						championImg: data.gameRecord.players[0].championImg,
	// 						lolName: data.gameRecord.players[0].lolName,
	// 						championName: data.gameRecord.players[0].champioName,
	// 						Position: data.gameRecord.players[0].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[1].championImg,
	// 						lolName: data.gameRecord.players[1].lolName,
	// 						championName: data.gameRecord.players[1].champioName,
	// 						Position: data.gameRecord.players[1].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[2].championImg,
	// 						lolName: data.gameRecord.players[2].lolName,
	// 						championName: data.gameRecord.players[2].champioName,
	// 						Position: data.gameRecord.players[2].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[3].championImg,
	// 						lolName: data.gameRecord.players[3].lolName,
	// 						championName: data.gameRecord.players[3].champioName,
	// 						Position: data.gameRecord.players[3].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[4].championImg,
	// 						lolName: data.gameRecord.players[4].lolName,
	// 						championName: data.gameRecord.players[4].champioName,
	// 						Position: data.gameRecord.players[4].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[5].championImg,
	// 						lolName: data.gameRecord.players[5].lolName,
	// 						championName: data.gameRecord.players[5].champioName,
	// 						Position: data.gameRecord.players[5].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[6].championImg,
	// 						lolName: data.gameRecord.players[6].lolName,
	// 						championName: data.gameRecord.players[6].champioName,
	// 						Position: data.gameRecord.players[6].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[7].championImg,
	// 						lolName: data.gameRecord.players[7].lolName,
	// 						championName: data.gameRecord.players[7].champioName,
	// 						Position: data.gameRecord.players[7].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[8].championImg,
	// 						lolName: data.gameRecord.players[8].lolName,
	// 						championName: data.gameRecord.players[8].champioName,
	// 						Position: data.gameRecord.players[8].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 					{
	// 						championImg: data.gameRecord.players[9].championImg,
	// 						lolName: data.gameRecord.players[9].lolName,
	// 						championName: data.gameRecord.players[9].champioName,
	// 						Position: data.gameRecord.players[9].Position,
	// 						team: data.gameRecord.players.team,
	// 					},
	// 				],
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, [userLoLName]);

	const getUsersData = async () => {
		const { personalData } = await delayFetcher(userLoLName);
	};

	return (
		<RecordsWrapper>
			<RecordItemUl>
				{arr.map((item) => (
					<RecordItem
						result={item}
						death={""}
						csPerMiutes={""}
						playtime={""}
						semiRuneImg={""}
						primaryRune={""}
						spell2img={""}
						championUI={""}
						win={false}
						spell2={""}
						spell1={""}
						averageTier={""}
						semiRune={""}
						visionWard={""}
						kda={""}
						kill={""}
						killRate={""}
						cs={""}
						championName={""}
						spell1img={""}
						lastPlayTime={""}
						assist={""}
						primaryRuneImg={""}
						gameMode={""}
						itemArray={[
							{ item0: "", item0Img: "" },
							{ item1: "", item1Img: "" },
							{ item2: "", item2Img: "" },
							{ item3: "", item3Img: "" },
							{ item4: "", item4Img: "" },
							{ item5: "", item5Img: "" },
							{ item6: "", item6Img: "" },
						]}
						players={[
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
							{
								championImg: "",
								lolName: "",
								championName: "",
								Position: "",
								team: "",
							},
						]}
					/>
				))}
			</RecordItemUl>
		</RecordsWrapper>
	);
}
export default RecordList;
