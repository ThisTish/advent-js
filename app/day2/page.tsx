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

type Checked = DropdownMenuCheckboxItemProps["checked"]




const DayTwoPage = () => {
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
	const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
	const [showPanel, setShowPanel] = React.useState<Checked>(false)

	return (
		<div className="relative flex justify-center w-1/2 m-20 bg-green-600 p-20 rounded-md">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={"outline"} className=" absolute right-20 h-12">
						<ArrowsButton />
					</Button>
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

			</DropdownMenu>


		</div>
	)
}

export default DayTwoPage;