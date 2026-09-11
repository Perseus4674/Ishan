export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
          {/* Hairline marker, centred against the first line of text. */}
          <span className="flex h-[1.625em] shrink-0 items-center" aria-hidden="true">
            <span className="block h-px w-1.5 bg-line-2" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
