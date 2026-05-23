async function asynchronouslyImportScript(cssSelector: string, path: string) {
  const elements = document.querySelectorAll<HTMLElement>(cssSelector);
  if (elements.length) {
    const { default: component } = await import(`@templates/${path}.ts`);
    elements.forEach((element) => component.init(element));
  }
}

export default async () => {
  await asynchronouslyImportScript('.js-gridOverlay', '_components/gridOverlay/gridOverlay');
  await asynchronouslyImportScript('.js-navigation', '_components/navigation/navigation');
  await asynchronouslyImportScript('.js-hero', '_sections/hero/hero');
};
