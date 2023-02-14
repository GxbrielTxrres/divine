import { ScrollControls, useScroll } from "@react-three/drei";
import PhysicsDonut from "./PhysicsDonut";
import {
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
	useEffect,
} from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import Intro from "./Intro";
import Background from "./Background";
import { Color } from "three";
import Website from "./Website";
export default function Experience() {
	const tl = useRef();
	const donut = useRef();

	const introRef = useRef();
	const introBg = useRef();
	const secondBg = useRef();
	const thirdBg = useRef();
	const fourthBg = useRef();

	const webground = useRef();
	const gs = useRef();
	const scroll = useScroll();

	const [isName, setName] = useState(true);
	const [hidden, setHidden] = useState(false);

	useFrame((state) => {
		const totalTimelineTime = tl.current.totalTime();

		tl.current.seek(scroll.offset * tl.current.duration());

		console.log(totalTimelineTime);

		if (totalTimelineTime >= 5) {
			setName(false);
		} else {
			setName(true);
		}

		if (totalTimelineTime >= 13.5) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	useLayoutEffect(() => {
		tl.current = gsap.timeline();
		gs.current = gsap;

		tl.current.to(introRef.current.scale, { x: 0, duration: 2 }, 0);
		tl.current.to(introRef.current.scale, { y: 0, duration: 2 }, 0);
		tl.current.to(introRef.current.scale, { z: 0, duration: 2 }, 0);

		tl.current.to(donut.current.scale, { x: 0, duration: 2 }, 0);
		tl.current.to(donut.current.scale, { y: 0, duration: 2 }, 0);
		tl.current.to(donut.current.scale, { z: 0, duration: 2 }, 0);

		tl.current.to(donut.current.scale, { x: 1.5, duration: 3 }, 2);
		tl.current.to(donut.current.scale, { y: 1.5, duration: 3 }, 2);
		tl.current.to(donut.current.scale, { z: 1.5, duration: 3 }, 2);

		tl.current.to(introBg.current.scale, { x: 0, duration: 3 }, 2);
		tl.current.to(introBg.current.scale, { y: 0, duration: 3 }, 2);
		tl.current.to(introBg.current.scale, { z: 0, duration: 3 }, 2);

		tl.current.to(introBg.current.position, { x: -10, duration: 3 }, 2);

		tl.current.to(secondBg.current.scale, { x: 0.05, duration: 2 }, 4.5);
		tl.current.to(secondBg.current.scale, { y: 0.05, duration: 2 }, 4.5);
		tl.current.to(secondBg.current.scale, { z: 0.05, duration: 2 }, 4.5);

		tl.current.to(secondBg.current.position, { x: 10, duration: 3 }, 3);

		tl.current.to(introRef.current.scale, { x: 1, duration: 2 }, 5);
		tl.current.to(introRef.current.scale, { y: 1, duration: 2 }, 5);
		tl.current.to(introRef.current.scale, { z: 1, duration: 2 }, 5);

		tl.current.to(donut.current.scale, { x: 0, duration: 2 }, 7);
		tl.current.to(donut.current.scale, { y: 0, duration: 2 }, 7);
		tl.current.to(donut.current.scale, { z: 0, duration: 2 }, 7);

		tl.current.to(introRef.current.scale, { x: 0, duration: 2 }, 7);
		tl.current.to(introRef.current.scale, { y: 0, duration: 2 }, 7);
		tl.current.to(introRef.current.scale, { z: 0, duration: 2 }, 7);

		tl.current.to(secondBg.current.scale, { x: 0, duration: 3 }, 9);
		tl.current.to(secondBg.current.scale, { y: 0, duration: 3 }, 9);
		tl.current.to(secondBg.current.scale, { z: 0, duration: 3 }, 9);

		tl.current.to(donut.current.scale, { x: 1.5, duration: 3 }, 9);
		tl.current.to(donut.current.scale, { y: 1.5, duration: 3 }, 9);
		tl.current.to(donut.current.scale, { z: 1.5, duration: 3 }, 9);

		tl.current.to(thirdBg.current.scale, { x: 0.07, duration: 4 }, 11.5);
		tl.current.to(thirdBg.current.scale, { y: 0.07, duration: 4 }, 11.5);
		tl.current.to(thirdBg.current.scale, { z: 0.07, duration: 4 }, 11.5);

		// tl.current.to(
		// 	webground.current.position,
		// 	{ x: thirdBg.current.position.x -, duration: 3 },
		// 	2,
		// );
	}, []);

	return (
		<>
			<Background
				uColor={new Color(0.75, 0.75, 0.75)}
				scale={0.05}
				uNoise={40}
				uScalar={20}
				uNoiseScalar={[10, 20]}
				ref={introBg}
			/>
			<Background
				uColor={new Color(0, 1, 0.5)}
				scale={0}
				uNoise={2}
				uScalar={5}
				uNoiseScalar={[0, 10]}
				ref={secondBg}
			/>
			<Background
				uColor={new Color(0.0, 0.0, 1.0)}
				scale={0}
				uNoise={1}
				uScalar={2}
				uElevation={50}
				uNoiseScalar={[0, 0]}
				uvScalar={[1, -2]}
				ref={thirdBg}
			/>

			<Intro ref={introRef} isName={isName} />

			<Website
				hidden={hidden}
				ref={webground}
				title="Aziel's Webground"
				src="https://aziels-game.vercel.app/"
			/>

			<PhysicsDonut ref={donut} />
		</>
	);
}

{
	/* <Background
	color={new Color(0.5, 0.5, 0)}
	scale={0}
	noise={100}
	scalar={200}
	elevation={50}
	noiseScalar={[0, 0]}
	ref={fourthBg}
/> */
}
