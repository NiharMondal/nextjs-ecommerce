import React from 'react'
import ChangePasswordForm from './ChangePasswordForm'

export default function ChangePassword() {
  return (
		<>
			<p className="mb-3 border-l-2 border-secondary bg-secondary/10 p-2">
				Please don't change password. If you change password then again restore the previous password. 😊❤️
			</p>
			<ChangePasswordForm />
		</>
  );
}
