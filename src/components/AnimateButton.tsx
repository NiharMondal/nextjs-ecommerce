

export default function Spin() {
	return (
		<svg className="h-5 w-5 mr-3 animate-spin" viewBox="0 0 24 24">
			<circle
				cx="12"
				cy="12"
				r="10"
				stroke="#a7f3d0"
				strokeWidth="4"
				fill="none"
			/>
			<path
				fill="#34d399"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.735a8 8 0 008-8h4a12 12 0 01-12 12v-4.265zM20 12a8 8 0 01-8 8v4.265a12 12 0 0012-12h-4zm-8-6.735a8 8 0 018-8v-4.265a12 12 0 00-12 12h4z"
			/>
		</svg>
	);
}
