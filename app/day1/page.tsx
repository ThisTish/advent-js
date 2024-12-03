"use client"
import { useState } from "react"

const DayOnePage = () => {
	const [see, setSee] = useState(false)

	return (<>
			<h1 className='text-3xl'>Day One</h1>
		<div className="m-20 border border-white p-5 rounded-xl flex w-fit">
			<div className="flex flex-col p-12 justify-center bg-[#26C9C3] rounded-lg">
				<div className='flex relative'>
					<svg width="16" height="42" viewBox="0 0 86 112" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-2 top-0.5'>
						<path fillRule="evenodd" clipRule="evenodd" d="M41 10H45C58.8071 10 70 21.1929 70 35V53L16 53V35C16 21.1929 27.1929 10 41 10ZM6.0096 53.8279C6.00321 53.5527 6 53.2767 6 53V35C6 15.67 21.67 0 41 0H45C64.33 0 80 15.67 80 35V53C80 53.2767 79.9968 53.5527 79.9904 53.8279C83.5273 55.3688 86 58.8956 86 63V102C86 107.523 81.5229 112 76 112H10C4.47715 112 0 107.523 0 102V63C0 58.8956 2.47266 55.3688 6.0096 53.8279Z" fill="#26C9C3" />
					</svg>
					<div className='border-[#26C9C3] border h-7 absolute top-2 left-9'></div>


					{see ? (
						<>
							<input
								name="password"
								type="text"
								placeholder="password"
								className='rounded-lg py-3 px-12 placeholder:text-[#26C9C3]'
							/>
							<button type='button' onClick={() => setSee(false)} className='absolute right-5'>
								<svg width="22" height="45" viewBox="0 0 110 107" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M105 71C105 71 82.6142 102 55 102C27.3858 102 5 71 5 71" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" />
									<path d="M70 70C70 78.2843 63.2843 85 55 85C46.7157 85 40 78.2843 40 70C40 61.7157 46.7157 55 55 55C63.2843 55 70 61.7157 70 70Z" fill="#26C9C3" />
									<path d="M105 70C105 70 82.6142 39 55 39C27.3858 39 5 70 5 70" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" />
									<path d="M54.9999 22.5V5.5" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M91 34.9707L100.686 21" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M9.00049 20.9996L18.6856 34.971" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
						</>
					) : (
						<>
							<input
								name="password"
								type="password"
								placeholder="********"
								className='rounded-lg py-3 px-12 placeholder:text-xs placeholder:text-[#26C9C3]'
							/>
							<button type='button' onClick={() => setSee(true)} className='absolute right-5'>
								<svg width="22" height="42" viewBox="0 0 110 107" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g transform="scale(1, -1) translate(0, -107)">
										<path d="M105 70C105 70 82.6142 39 55 39C27.3858 39 5 70 5 70" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" className='' />
										<path d="M54.9999 22.5V5.5" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M91 34.9707L100.686 21" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M9.00049 20.9996L18.6856 34.971" stroke="#26C9C3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
									</g>
								</svg>
							</button>
						</>
					)
					}
				</div>
			</div>
		</div>
		</>
	)
}

export default DayOnePage