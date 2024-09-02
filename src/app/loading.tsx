import Image from "next/image";
import React from "react";

export default function Loading() {
	return (
		<div className="absolute inset-0 bg-black/80">
			<div className="flex items-center justify-center h-screen text-white">
				<div className="animate-bounce">
					<Image
						src="/img/logo.png"
						width={200}
						height={200}
						alt="loading"
					/>
				</div>
			</div>
		</div>
	);
}
