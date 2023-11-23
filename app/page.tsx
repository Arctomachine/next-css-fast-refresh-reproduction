/** Add your relevant code here for the issue to reproduce */
export default function Home () {
	return (
		<>
			<h1>Reproduction steps:</h1>
			<ol>
				<li>Start server in dev mode with <code>--turbo</code> flag</li>
				<li>Go to globals.css, change color and save - it works</li>
				<li>Chane color again and save - previous color still remains</li>
			</ol>
		</>
	)
}
