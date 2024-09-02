"use client";
import ImageWeidget from "@/components/shared/ImageWeidget";
import {
	useGetMyProfileQuery,
	useUpdateAvatarMutation,
	useUpdateProfileMutation,
} from "@/redux/api/userApi";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
import { TUserResponse } from "@/types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AccountUpdateForm() {
	const { register, handleSubmit } = useForm();
	const [photo, setPhoto] = useState<any>(null);
	const user = useAppSelector(selectedUser);
	const { data: profileInfo } = useGetMyProfileQuery(user?.id as string);
	const [updateProfile] = useUpdateProfileMutation();
	const [updateAvatar] = useUpdateAvatarMutation();
	const updateUserInfo: SubmitHandler<Partial<TUserResponse>> = async (
		data
	) => {
		const updatedData = {
			id: user?.id as string,
			payload: data,
		};
		try {
			const res = await updateProfile(updatedData).unwrap();
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	const updateProfilePhoto = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const payload = {
			id: user?.id as string,
			payload: {
				avatar: photo?.secure_url,
			},
		};
		try {
			const res = await updateAvatar(payload).unwrap();
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{/* user information form */}
			<form
				onSubmit={handleSubmit(updateUserInfo)}
				className="space-y-3 "
			>
				<div className="flex flex-col">
					<label htmlFor="fullname">Name</label>
					<input
						defaultValue={profileInfo?.result?.name}
						type="text"
						id="fullname"
						{...register("name")}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						disabled
						defaultValue={profileInfo?.result?.email}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="phone">Phone</label>
					<input
						defaultValue={profileInfo?.result?.phone || ""}
						type="text"
						id="phone"
						{...register("phone")}
					/>
				</div>

				<button type="submit" className="btn primary text-white">
					Update
				</button>
			</form>

			{/* user profile photo update */}
			<div className="order-first md:order-last">
				<div className="relative mx-auto size-48 border rounded-full overflow-hidden">
					<Image
						fill={true}
						src={profileInfo?.result?.avatar || "/img/head.png"}
						alt="profile-photo"
					/>
				</div>
				<form
					onSubmit={updateProfilePhoto}
					className="flex items-center justify-center gap-x-5 mt-5 text-center"
				>
					<ImageWeidget setPhoto={setPhoto} />
					<span>
						<ArrowRightIcon width={20} />
					</span>
					<button
						type="submit"
						className="btn border-2 border-primary hover:bg-primary hover:text-white"
					>
						Submit Photo
					</button>
				</form>
			</div>
		</div>
	);
}
