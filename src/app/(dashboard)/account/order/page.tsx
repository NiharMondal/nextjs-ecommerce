import React from 'react'
import UserOrderList from './UserOrderList'
import { Metadata } from 'next';

export const metadata:Metadata = {
	title: "Order History | Gadget Galaxy",
	description:
		"View your past orders and track your recent purchases at Gadget Galaxy.",
};
export default function OrderPage() {
  return (
    <UserOrderList/>
  )
}
