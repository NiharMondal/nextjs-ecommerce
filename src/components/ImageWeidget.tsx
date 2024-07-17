"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
export default function ImageWeidget() {
	const [resource, setResource] = useState<any>(null);
	console.log(resource);
	return (
		<CldUploadWidget
			uploadPreset="my-cloudinary-preset"
			onSuccess={(result, { widget }) => {
				setResource(result?.info); // { public_id, secure_url, etc }
				widget.close();
			}}
		>
			{({ open }) => {
				return <button onClick={() => open()}>Upload an Image</button>;
			}}
		</CldUploadWidget>
	);
}
