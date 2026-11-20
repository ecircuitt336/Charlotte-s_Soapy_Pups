export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}) {
  const alignClass =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignClass} gap-4`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-rose-700">
          {eyebrow}
        </span>
      ) : null}
      <Tag
        id={id}
        className="text-balance text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight"
      >
        {title}
      </Tag>
      {description ? (
        <p className="max-w-2xl text-lg leading-relaxed text-ink-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
