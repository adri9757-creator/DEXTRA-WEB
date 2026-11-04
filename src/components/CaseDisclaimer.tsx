/**
 * Aviso común a todos los casos publicados.
 *
 * Publicidad de la abogacía (Estatuto General de la Abogacía, RD 135/2021,
 * art. 6 del Código Deontológico): la información debe ser veraz, no puede
 * prometer resultados ni revelar datos amparados por el secreto profesional.
 * [POR_CONFIRMAR] Antes de publicar cada caso, confirmar que el cliente no es
 * identificable (ni por terceros que conozcan el asunto) o que consta su
 * autorización por escrito.
 */
const CaseDisclaimer = ({ className = "" }: { className?: string }) => (
  <aside
    aria-label="Aviso sobre los casos"
    className={`rounded-lg border border-border bg-secondary p-5 font-sans text-sm leading-relaxed text-muted-foreground ${className}`}
  >
    Caso descrito de forma anonimizada: se han omitido o modificado los datos que permitirían identificar a las personas
    implicadas, para preservar el secreto profesional. Cada asunto es distinto; el resultado depende de los hechos, de la
    prueba y de la decisión de la autoridad o el tribunal competente. Los resultados obtenidos en otros casos no
    garantizan resultados futuros.
  </aside>
);

export default CaseDisclaimer;
