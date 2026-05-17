const asynchronouslyImportScript = async (cssSelector: string, path: string) => {
  const elements = document.querySelectorAll<HTMLElement>(cssSelector);
  if (elements.length) {
    const script = await import(`@templates/${path}`);
    elements.forEach((element) => script.default.init(element));
  }
};

// prettier-ignore
export default async () => {
  await asynchronouslyImportScript('.js-gridOverlay', '_components/gridOverlay/gridOverlay');
  await asynchronouslyImportScript('.js-navigation', '_components/navigation/navigation');
};
