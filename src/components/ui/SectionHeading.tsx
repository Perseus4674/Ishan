export function SectionHeading({ children, id }: { children: string; id?: string }) {
  return (
    <div className="mb-10">
      <span className="block h-px w-full bg-line" aria-hidden="true" />
      <h2 id={id} className="mt-6 font-display text-3xl text-head sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
