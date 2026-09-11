export function StatusFlag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-2 px-3 py-1 text-xs text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
      {label}
    </span>
  );
}
