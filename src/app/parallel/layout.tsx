export default function Layout({
	approach,
	instance,
	user,
	children,
}: {
	approach: React.ReactNode;
	instance: React.ReactNode;
	user: React.ReactNode;
	children: React.ReactNode;
}) {
	console.log("src/app/parallel/layout.tsx");

	return (
		<>
			{children}
			{approach}
			{instance}
			{user}
		</>
	);
}
