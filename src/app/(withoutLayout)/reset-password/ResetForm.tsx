"use client";
import SubmitButton from "@/components/SubmitButton";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type TResetPasswordRequest = {
	password: string;
	confirmPassword: string;
};
export default function ResetForm() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<TResetPasswordRequest>();

	const [resetPassword, { isLoading }] = useResetPasswordMutation();
	const handleResetPassword: SubmitHandler<TResetPasswordRequest> = async (
		data
	) => {
		try {
			const res = await resetPassword(data).unwrap();
			if (res.success) {
				toast.success("Password reset successfully");
				router.push("/sign-in");
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(handleResetPassword)}
			className="max-w-xl border rounded-md p-8 space-y-5"
		>
			<div>
				<label htmlFor="password" className="mb-2 inline-block">
					Password
				</label>
				<input
					type="password"
					id="password"
					{...register("password")}
				/>
			</div>
			<div>
				<label htmlFor="confirmPassword" className="mb-2 inline-block">
					Confirm password
				</label>
				<input
					type="password"
					id="confirmPassword"
					{...register("confirmPassword")}
				/>
			</div>

			<SubmitButton isLoading={isLoading}>reset password</SubmitButton>
		</form>
	);
}
