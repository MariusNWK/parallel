import getData from "../getData";

export default async function Page(props: {
	searchParams: Promise<{ take: string }>;
}) {
	console.log("src/app/parallel/@user/page.tsx");
	const searchParams = await props.searchParams;

	const take = Number(searchParams.take);

	const data = await getData(Number.isNaN(take) ? 5 : take);

	return <div>User {data}</div>;
}
