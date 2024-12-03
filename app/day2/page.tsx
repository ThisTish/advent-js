"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import movies from '@/lib/movielist.json'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import ArrowsButton from "./Arrow"
import SearchInput from "./SearchInput"

type Checked = DropdownMenuCheckboxItemProps["checked"]




const DayTwoPage = () => {
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
	const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
	const [showPanel, setShowPanel] = React.useState<Checked>(false)
	const [search, setSearch] = React.useState('')
	const [filteredMovies, setFilteredMovies] = React.useState<typeof movies>([])

	const handlesSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase()
		setSearch(query)
		setFilteredMovies(movies.filter((movie) => movie.Title.toLowerCase().includes(query)))
	}

	const handleDropDown = () =>{
		setFilteredMovies(movies)
		setSearch(' ')
	}


	return (



		<div className="relative flex justify-center w-1/2 m-20 bg-green-600 p-20 rounded-md">

			<Input
				placeholder="Your Favorite Holiday Movie"
				className="w-96 h-12 border-none bg-red-400 placeholder:text-white placeholder:font-semibold relative"
				list="movies"
				type="search"
				value={search}
				onChange={handlesSearchChange}
			/>
			{search ? (
				<ul className="absolute top-[8rem] left-48 w-96 bg-red-400  flex flex-col gap-1 max-h-96 overflow-auto rounded">
					{filteredMovies.map((movie) =>(
						<li 
						className="flex justify-start gap-2"
						key={movie["Movie Link"]}
						onClick={() => setSearch(movie.Title)}
						>
							<Image src={`${movie.Image}`} alt={movie["Image Alt"]} width={40} height={60} />
							{movie.Title}
						</li>
					))}
				</ul>
			) : null}

			<Button variant={"outline"} className=" absolute right-44 h-12" onClick={handleDropDown}>
				<ArrowsButton />
			</Button>

			{/* <DropdownMenu>
				<DropdownMenuTrigger asChild>
					
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-80">
					{movies.map((movie) => (
						<DropdownMenuCheckboxItem
							key={movie["Movie Link"]}
							checked={showStatusBar}
							onCheckedChange={setShowStatusBar}
						>
							<Image src={`${movie.Image}`} alt={movie["Image Alt"]} width={40} height={60} />
							<DropdownMenuLabel>{movie.Title}</DropdownMenuLabel>
						</DropdownMenuCheckboxItem>
					))}
				</DropdownMenuContent>

			</DropdownMenu> */}
			{/* <div>
						<SearchInput />
					</div> */}

		</div>
	)
}

export default DayTwoPage;