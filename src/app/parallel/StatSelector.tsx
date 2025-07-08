"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";

export default function StatSelector() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const handlePeriodChange = (take: number) => {
		const params = new URLSearchParams(searchParams?.toString() ?? "");

		params.set("take", take.toString());
		startTransition(() => {
			router.push(`${pathname}?${params.toString()}`);
		});
	};

	return (
		<div className="flex">
			<button
				onClick={() => handlePeriodChange(5)}
				type="button"
				className="border px-10 py-1 rounded text-white bg-amber-900 border-black hover:cursor-pointer hover:bg-amber-600"
			>
				5
			</button>

			<button
				onClick={() => handlePeriodChange(10)}
				type="button"
				className="border px-10 py-1 rounded text-white bg-amber-900 border-black hover:cursor-pointer hover:bg-amber-600"
			>
				10
			</button>

			<button
				onClick={() => handlePeriodChange(15)}
				type="button"
				className="border px-10 py-1 rounded text-white bg-amber-900 border-black hover:cursor-pointer hover:bg-amber-600"
			>
				15
			</button>
		</div>
	);
}
