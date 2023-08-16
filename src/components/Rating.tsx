"use client"
import ReactStars from "react-rating-star-with-type";

export default function ProductRating({value}: {value: number}) {
	return <ReactStars value={value}  />;
}
