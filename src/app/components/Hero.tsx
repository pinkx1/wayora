import React from "react";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { ChevronDown, Compass, Flag, Globe, Info } from "lucide-react";
import heroBackground from "../../../ChatGPT Image Feb 19, 2026, 07_19_11 PM.png";

export function Hero() {
	return (
		<section className="relative w-full h-screen min-h-[860px] overflow-hidden bg-[#0f172a]">
			<img src={heroBackground} alt="Hero background" className="absolute inset-0 w-full h-full object-cover object-center" />
			<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

			<div className="relative z-10 h-full">
				<div className="relative h-full w-[min(1240px,calc(100%-128px))] max-[900px]:w-[calc(100%-48px)] mx-auto">
					<div className="absolute -left-10 -right-10 top-[68%] -translate-y-1/2 max-[1220px]:left-0 max-[1220px]:right-0 max-[1220px]:top-[60%]">
						<div className="grid grid-cols-[minmax(0,560px)_minmax(0,1fr)] items-stretch gap-x-10 max-[1220px]:grid-cols-1 max-[1220px]:gap-y-6">
							<div className="max-w-[620px]">
								<div className="h-full flex items-start">
									<h1 className="m-0 text-[52px] max-[900px]:text-[38px] max-[700px]:text-[32px] font-extrabold leading-[1.23] text-white/95">
										<span className="block whitespace-nowrap max-[700px]:whitespace-normal">Uncover the World&apos;s</span>
										<span className="block whitespace-nowrap max-[700px]:whitespace-normal">Natural Wonders.</span>
									</h1>
								</div>
							</div>

							<div className="flex justify-end pt-[12px] translate-y-[0px]">
								<div className="w-full max-w-[900px] h-[110px] max-[1220px]:h-auto bg-white rounded-[16px] pt-[25px] pb-[21px] px-4 shadow-[0_14px_32px_rgba(0,0,0,0.20)] grid grid-cols-[1.3fr_1.2fr_1.1fr_auto] max-[700px]:grid-cols-1 items-start gap-x-[4px] max-[700px]:gap-y-3">
									<div className="flex flex-col min-w-0">
										<p className="m-0 mb-[8px] text-[14px] leading-none font-bold text-[#1F2937]">Location</p>
										<div className="min-h-[42px] rounded-[14px] bg-[#F1F4F7] px-[13px] py-[10px] flex items-center gap-2 text-[14px] leading-[1.2] font-normal text-[#778294]">
											<LocationOnRoundedIcon className="shrink-0" style={{ fontSize: 18, color: "#778294" }} />
											<span className="truncate">Bali, Indonesia</span>
										</div>
									</div>

									<div className="flex flex-col min-w-0">
										<p className="m-0 mb-[8px] text-[14px] leading-none font-bold text-[#1F2937]">Date</p>
										<div className="min-h-[42px] rounded-[14px] bg-[#F1F4F7] px-[13px] py-[10px] flex items-center gap-2 text-[14px] leading-[1.2] font-normal text-[#778294]">
											<CalendarMonthRoundedIcon className="shrink-0" style={{ fontSize: 18, color: "#778294" }} />
											<span className="truncate">Sun, 15 Aug 2024</span>
										</div>
									</div>

									<div className="flex flex-col min-w-0">
										<p className="m-0 mb-[8px] text-[14px] leading-none font-bold text-[#1F2937]">Guest</p>
										<div className="min-h-[42px] rounded-[14px] bg-[#F1F4F7] px-[13px] py-[10px] flex items-center gap-2 text-[14px] leading-[1.2] font-normal text-[#778294]">
											<GroupsRoundedIcon className="shrink-0" style={{ fontSize: 18, color: "#778294" }} />
											<span className="truncate">2 People</span>
											<ChevronDown className="w-[15px] h-[15px] text-[#778294] shrink-0 ml-auto" />
										</div>
									</div>

									<button className="self-start mt-[20px] max-[700px]:mt-0 h-[44px] max-[700px]:w-full px-[18px] rounded-[14px] border-0 bg-[#0B1B2B] hover:bg-[#102845] text-white text-[14px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25">
										Book schedule
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="absolute inset-x-0 bottom-20 flex items-center gap-7 max-[980px]:flex-col max-[980px]:items-start max-[700px]:gap-[14px]">
						<div className="flex items-center gap-6">
							<div className="w-[180px] text-[14px] font-semibold leading-[1.2] text-white/90">
								300+ iconic
								<br />
								spots included
							</div>

							<div className="flex gap-3">
								<button className="w-[46px] h-[46px] rounded-full bg-white/10 border border-white/20 grid place-items-center hover:bg-white/14 transition-colors" aria-label="Info">
									<Info className="w-[19px] h-[19px] text-white/85" />
								</button>
								<button className="w-[46px] h-[46px] rounded-full bg-white/10 border border-white/20 grid place-items-center hover:bg-white/14 transition-colors" aria-label="Flag">
									<Flag className="w-[19px] h-[19px] text-white/85" />
								</button>
								<button className="w-[46px] h-[46px] rounded-full bg-white/10 border border-white/20 grid place-items-center hover:bg-white/14 transition-colors" aria-label="Compass">
									<Compass className="w-[19px] h-[19px] text-white/85" />
								</button>
								<button className="w-[46px] h-[46px] rounded-full bg-white/10 border border-white/20 grid place-items-center hover:bg-white/14 transition-colors" aria-label="Globe">
									<Globe className="w-[19px] h-[19px] text-white/85" />
								</button>
							</div>
						</div>

						<div className="h-px flex-1 min-w-[280px] bg-white/22 max-[980px]:hidden" />

						<p className="m-0 max-w-[520px] text-[13px] leading-[1.45] font-normal text-white/72">
							Discover Nature&apos;s Finest Places, breathtaking landscapes, untouched beauty, and nature at its purest. Discover Nature&apos;s Finest Places.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
