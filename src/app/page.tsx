export default function Home() {
	return (
		<div>
			<h1>League Tracker</h1>
			<form>
				<label htmlFor="summonerName">Summoner Name:</label>
				<input type="text" id="summonerName" name="summonerName" placeholder="NotLeo #urmom" />
				<button type="submit">Enter</button>
			</form>
		</div>
	);
}
