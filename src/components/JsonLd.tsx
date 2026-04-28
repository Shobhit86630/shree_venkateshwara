type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

export default function JsonLd({
  data,
  id,
}: {
  data: JsonLdValue;
  id?: string;
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
