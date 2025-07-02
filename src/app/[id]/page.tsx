export default async function SingleProductPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2 className="text-4xl">product : {id}</h2>
    </div>
}