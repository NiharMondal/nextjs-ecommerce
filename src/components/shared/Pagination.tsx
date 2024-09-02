import React from "react";
type PaginationProps = {
	totalPages: number;
	currentPage: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
};
export default function Pagination({
	totalPages,
	currentPage,
	setPage,
}: PaginationProps) {
	const getPageNumbers = () => {
		const pageRange = 4; // Number of pages to show on each side of the current page
		let startPage, endPage;

		if (totalPages <= 5) {
			startPage = 1;
			endPage = totalPages;
		} else {
			const halfRange = Math.floor(pageRange / 2);
			startPage = Math.max(1, currentPage - halfRange);
			endPage = Math.min(totalPages, currentPage + halfRange);

			// Adjust startPage and endPage if there are not enough pages to display the full range
			if (endPage - startPage < pageRange - 1) {
				if (currentPage <= Math.ceil(pageRange / 2)) {
					endPage = pageRange;
				} else {
					startPage = totalPages - pageRange + 1;
				}
			}
		}

		let pageNumbers = [];
		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	};

	const handlePageClick = (pageNumber: number) => {
		setPage(pageNumber);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setPage(currentPage + 1);
		}
	};

	return (
		<div className="flex justify-end items-center gap-x-3">
			<button onClick={handlePreviousPage}>Prev</button>
			<ul className="flex gap-x-2">
				{getPageNumbers().map((p) => (
					<li
						onClick={() => handlePageClick(p)}
						key={p}
						className={` size-8 pt-1 text-center hover:bg-primary hover:text-white cursor-pointer  ${
							p === currentPage
								? "bg-primary text-white"
								: " text-primary"
						}`}
					>
						{p}
					</li>
				))}
			</ul>
			<button onClick={handleNextPage}>Next</button>
		</div>
	);
}
