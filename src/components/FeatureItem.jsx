export default function FeatureItem({ icon: Icon, lines }) {
  return (
    <li className="flex items-center gap-3">
      <Icon aria-hidden="true" className="size-9 shrink-0 text-brand sm:size-10" strokeWidth={1.5} />
      <span className="text-xs font-semibold leading-tight tracking-wide text-white sm:text-sm">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    </li>
  )
}
