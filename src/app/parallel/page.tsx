import { Suspense } from "react";
import StatSelector from "./StatSelector";

export default function Page() {
	console.log("src/app/parallel/page.tsx");

	return (
		<Suspense>
			<StatSelector />
		</Suspense>
	);
}
