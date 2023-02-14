import { useThree, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, useScroll } from "@react-three/drei";
import vertexShader from "lib/shaders/vertexShader";
import fragmentShader from "lib/shaders/fragmentShader";
import { Color, Vector2 } from "three";
import { forwardRef, useRef, useCallback, useEffect } from "react";
import { useControls } from "leva";

const BackgroundMaterial = shaderMaterial(
	{
		uTime: 0,
		uColor: new Color(1, 1, 1),
		uNewColor: new Color(1, 0, 0),
		u_Timee: 0,
		uNoise: 0,
		uScalar: 0,
		uElevation: 10,
		uNoiseScalar: new Vector2(10, 20),
		uMouse: new Vector2(0, 0),
		uvScalar: new Vector2(1, 1),
	},
	vertexShader,
	fragmentShader,
);

extend({ BackgroundMaterial });

const Background = forwardRef(function Background(props, ref) {
	// const { noise, scalar, color } = useControls("Shader", {
	// 	noise: {
	// 		value: 10,
	// 		min: 0,
	// 		max: 100,
	// 		step: 0.25,
	// 	},
	// 	scalar: {
	// 		value: 10,
	// 		min: 0,
	// 		max: 200,
	// 		step: 0.25,
	// 	},
	// 	color: { value: new Color(1, 0, 0) },
	// });

	const mousePosition = useRef({ x: 0, y: 0 });

	const updateMousePosition = useCallback((e) => {
		mousePosition.current = { x: e.pageX, y: e.pageY };
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition, false);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition, false);
		};
	}, [updateMousePosition]);

	const { scale, uNoise, uScalar, uColor, uvScalar, ...otherProps } = props;

	const scroll = useScroll();
	const { size } = useThree();

	useFrame((state) => {
		ref.current.material.uniforms.uTime.value = scroll.offset;
		ref.current.material.uniforms.u_Timee.value = state.clock.elapsedTime;
		// ref.current.material.uniforms.uNoise.value = noise;
		// ref.current.material.uniforms.uScalar.value = scalar;
		// ref.current.material.uniforms.uColor.value = color;

		ref.current.material.uniforms.uMouse.value = new Vector2(
			mousePosition.current.x,
			mousePosition.current.y,
		);
	});

	return (
		<mesh scale={scale} ref={ref} position-z={-50}>
			<planeGeometry args={[size.width, size.height, 8, 8]} />
			<backgroundMaterial
				uColor={uColor}
				uNoise={uNoise}
				uScalar={uScalar}
				uvScalar={uvScalar}
				{...otherProps}
			/>
		</mesh>
	);
});

export default Background;
