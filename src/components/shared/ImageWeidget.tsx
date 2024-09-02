import { CldUploadWidget } from "next-cloudinary";

type Props = {
	setPhoto: React.Dispatch<React.SetStateAction<any>>;
};
export default function ImageWeidget({ setPhoto }: Props) {
	return (
		<CldUploadWidget
			uploadPreset="my-cloudinary-preset"
			onSuccess={(result, { widget }) => {
				setPhoto(result?.info); // { public_id, secure_url, etc }
				widget.close();
			}}
		>
			{({ open }) => {
				return (
					<button onClick={() => open()} className="btn bg-primary text-white">
						Upload a photo
					</button>
				);
			}}
		</CldUploadWidget>
	);
}
