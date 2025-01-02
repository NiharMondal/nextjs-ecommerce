"use client";
import SubmitButton from "@/components/SubmitButton";
import {
	useGetAddressQuery,
	useUpdateAddressMutation,
} from "@/redux/api/userApi";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
import { TAddress } from "@/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AddressForm() {
	const user = useAppSelector(selectedUser);
	const { register, handleSubmit } = useForm<TAddress>();
	const { data: addressData } = useGetAddressQuery(user?.id as string);
	const [updateAddress, { isLoading }] = useUpdateAddressMutation();
	const updateAddressInfo: SubmitHandler<TAddress> = async (data) => {
		const updatedData = {
			payload: data,
			id: user?.id as string,
		};
		try {
			const res = await updateAddress(updatedData).unwrap();
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(updateAddressInfo)}
			className="space-y-3 max-w-md"
		>
			<div className="flex flex-col">
				<label htmlFor="street">Street</label>
				<input
					defaultValue={addressData?.result?.street || ""}
					type="text"
					id="street"
					{...register("street", { required: true })}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="postCode">Post code</label>
				<input
					defaultValue={addressData?.result?.postCode || ""}
					type="text"
					id="postCode"
					{...register("postCode", { required: true })}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="city">City</label>
				<input
					defaultValue={addressData?.result?.city || ""}
					type="text"
					id="city"
					{...register("city", { required: true })}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="country">Country</label>
				<input
					defaultValue={addressData?.result?.country || ""}
					type="text"
					id="country"
					{...register("country", { required: true })}
				/>
			</div>

			<SubmitButton isLoading={isLoading}>Update</SubmitButton>
		</form>
	);
}
