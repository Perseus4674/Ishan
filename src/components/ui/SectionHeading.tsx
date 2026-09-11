export function SectionHeading({ children, id }: { children: string; id?: string }) {
  return (
    <h2 id={id} className="mb-10 font-display text-3xl text-head sm:text-4xl">
      {children}
    </h2>
  );
}
