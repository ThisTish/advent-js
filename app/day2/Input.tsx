import { Input } from "@/components/ui/input";
import Image from "next/image";
import movies from '@/lib/movielist.json'

const SearchInput = () => {
	return (
		<>
			<Input
				placeholder="Your Favorite Holiday Movie"
				className="w-full h-12 bg-red-400 placeholder:text-white placeholder:font-semibold relative"
				list="movies"
				type="search"
			/>
			<datalist id="movies">
				{movies.map((movie) => {
					return <option value={movie.Title} key={movie["Movie Link"]}>
						<div>
							<Image src={`${movie.Image}`} alt={movie["Image Alt"]} width={20} height={40} />
						</div>
					</option>
				})}
			</datalist>
		</>

	)
}

export default SearchInput