export default function Modal() {
	return (
		<div
			style={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%,-50%)",
			}}
		>
			<div
				style={{
					backgroundColor: "black",
					height: "100vh",
					width: "100vw",
				}}
			>
				<p
					style={{
						fontFamily: "oswald",
						fontSize: "1.5rem",
						cursor: "pointer",
						color: "white",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%,-50%)",
					}}
				></p>
			</div>
		</div>
	);
}
