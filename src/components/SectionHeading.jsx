export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.35em] text-[#FD6F00]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-neutral-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
