import {
	Text3D,
	Center,
	useScroll,
	MeshTransmissionMaterial,
} from "@react-three/drei";
import { forwardRef, useState } from "react";
export const Intro = forwardRef(function Intro({ isName }, ref) {
	return (
		<group ref={ref}>
			<Center>
				<Text3D font="./fonts/optimer_bold.typeface.json">
					<MeshTransmissionMaterial
						ior={1.5}
						thickness={1}
						distortionScale={1}
						distortion={1}
						temporalDistortion={0.25}
						chromaticAberration={2}
						sheenColor="aqua"
						sheen={0.3}
						specularColor="green"
						specularIntensity={3}
						background="blue"
						roughness={0.1}
						reflectivity={0.5}
						forceSinglePass
						backside
					/>
					{isName ? "Gabriel Torres" : "Creative Developer"}
				</Text3D>
			</Center>
		</group>
	);
});

export default Intro;
