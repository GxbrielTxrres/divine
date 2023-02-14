import {
	MeshTransmissionMaterial,
	Sparkles,
	useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

export const PhysicsDonut = forwardRef(function PhysicsDonut(props, ref) {
	const rigidBody = useRef();
	const sparkles = useRef();
	const scroll = useScroll();

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const eulerRotation = new THREE.Euler(
			scroll.offset * 2,
			time * 1.5,
			Math.sin(scroll.offset) * Math.PI * 2,
		);
		const quaternionRotation = new THREE.Quaternion();
		quaternionRotation.setFromEuler(eulerRotation);
		rigidBody.current.setNextKinematicRotation(quaternionRotation);

		ref.current.position.x = scroll.offset;
		ref.current.position.y = scroll.offset;
		ref.current.position.z = -Math.abs(Math.cos(scroll.offset) * 3);

		sparkles.current.scale.x = Math.abs(Math.sin(scroll.offset / 4) * 2);
		sparkles.current.scale.y = Math.abs(Math.sin(scroll.offset / 4) * 2);
		sparkles.current.scale.z = Math.abs(Math.sin(scroll.offset / 4) * 2);
	});

	return (
		<Physics>
			<group scale={1.5} ref={ref}>
				<RigidBody
					rotation={[-Math.PI / 2, 0, 0]}
					ref={rigidBody}
					colliders="trimesh"
					type="kinematicPosition"
				>
					<mesh rotation={[-Math.PI / 2, 0, 0]}>
						<torusGeometry />

						<MeshTransmissionMaterial
							chromaticAberration={2}
							distortion={1}
							temporalDistortion={0.2}
							distortionScale={0.5}
							thickness={1}
							reflectivity={0.2}
						/>

						<Sparkles
							ref={sparkles}
							scale={10}
							noise={0}
							speed={0}
							size={2}
						/>
					</mesh>
				</RigidBody>
				<PhysicsBall position={[-0.9, 0.3, 0]} color="blue" />
				<PhysicsBall position={[0, 0.3, -0.9]} color="red" />
				<PhysicsBall position={[0.9, 0.3, 0]} color="yellow" />
			</group>
		</Physics>
	);
});

function PhysicsBall({ color, position }) {
	return (
		<RigidBody restitution={1} friction={2} colliders="ball">
			<mesh scale={0.2} position={position}>
				<sphereGeometry />
				<MeshTransmissionMaterial args={[1, false]} color={color} />
			</mesh>
		</RigidBody>
	);
}

export default PhysicsDonut;
