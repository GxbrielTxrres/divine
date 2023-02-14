import { Center, Html } from "@react-three/drei";
import { forwardRef, useState } from "react";

import Modal from "./Modal";

const Website = forwardRef((props, ref) => {
	const { title, src, hidden } = props;

	const [modal, setModal] = useState(false);

	return (
		<group>
			<Center position-x={-1.5}>
				<mesh ref={ref}>
					<Html
						scale={0.4}
						position-y={-21}
						occlude
						zIndexRange={[0, 500]}
						style={{
							transition: "all 1.5s",
							opacity: hidden ? 1 : 0,
							transform: `scale(${hidden ? 1 : 0.5})`,
							color: "black",
						}}
					>
						<div
							style={{
								textAlign: "center",
								background: "rgba(255, 255, 255, 0.5)",
								borderRadius: "16px",
								boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
								backdropFilter: "blur(2px)",
								webkitBackdropFilter: "blur(2px)",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								width: "400px",
							}}
						>
							<h1
								onClick={() => {
									console.log(window);
									window.open(
										"https://aziels-game.vercel.app/",
									);
								}}
								style={{
									fontFamily: "Montserrat",
									fontSize: "2rem",
									cursor: "pointer",
								}}
							>
								{title}
							</h1>
							<iframe
								style={{ borderRadius: "10px" }}
								src={src}
								height="350px"
								width="300px"
								frameborder="0"
							></iframe>
							<div
								onClick={() => {
									setModal(!modal);
								}}
							>
								{modal ? (
									<Modal />
								) : (
									<p
										style={{
											fontFamily: "oswald",
											fontSize: "1.5rem",
											cursor: "pointer",
										}}
									>
										Tap for description...
									</p>
								)}
							</div>
						</div>
					</Html>
				</mesh>
			</Center>
		</group>
	);
});

export default Website;
