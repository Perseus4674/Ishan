export function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="whitespace-nowrap font-heading text-2xl font-semibold text-head sm:text-3xl">
        <span className="text-mint">/</span> {children}
      </h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}
