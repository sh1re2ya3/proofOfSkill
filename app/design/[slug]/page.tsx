export default function DesignDetail({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="w-full min-h-screen bg-dark-base flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Design Detail: {params.slug}</h1>
    </main>
  )
}
