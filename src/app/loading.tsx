export default function RootLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101010] p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1c1c1c] p-6 text-slate-200">
        <div className="mb-4 flex items-center gap-3">
          <span className="bg-primary h-3 w-3 animate-pulse rounded-full" />
          <p className="text-lg font-semibold">Загружаем данные</p>
        </div>
        <p className="text-sm text-slate-400">
          Подготавливаем графики, таблицы и актуальную сводку по точке.
        </p>
      </div>
    </main>
  );
}
