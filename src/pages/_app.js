import "@/styles/globals.css";
import { styles } from "../../lib/styles";

import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import Experience from "components/Experience";
import { Perf } from "r3f-perf";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas style={{ ...styles }}>
				<Environment preset="sunset" />
				<ScrollControls pages={3}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
