"use client";

import React from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";

import { decrement, increment ,incrementByAmount} from "../redux/slice/counter";

export function Counter() {
	const count: number = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => dispatch(decrement())}>decrement</button>
			<button className="ml-5" onClick={() => dispatch(increment())}>
				increment
			</button>
			<button className="ml-5" onClick={() => dispatch(incrementByAmount(5))}>
				incrementByAmount
			</button>
		</div>
	);
}
