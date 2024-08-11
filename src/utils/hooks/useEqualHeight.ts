import { useEffect } from "react";

const useEqualHeight = (classNames: string[]) => {
	useEffect(() => {
		const equalHeight = () => {
			const elementsByRow: HTMLElement[][] = [];
			let currentRow = 0;

			classNames.forEach((className) => {
				const elements = Array.from(
					document.getElementsByClassName(className)
				) as HTMLElement[];
				elements.forEach((element) => {
					if (!elementsByRow[currentRow]) {
						elementsByRow[currentRow] = [];
					}
					elementsByRow[currentRow].push(element);
				});

				currentRow++;
			});

			elementsByRow.forEach((elements) => {
				const minHeight = Math.max(
					...elements.map((element) => element.offsetHeight)
				);
				elements.forEach((element) => {
					element.style.minHeight = `${minHeight}px`;
				});
			});
		};

		equalHeight();

		const handleResize = () => {
			equalHeight();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [classNames]);
};

export default useEqualHeight;
