export interface IEl {
  [key: string]: HTMLElement | null | undefined;
}

export interface ICfg {
  name: string;
  selectors: {
    [key: string]: string;
  };
  classes: {
    [key: string]: string;
  };
  el: IEl;
  els?: {
    [key: string]: NodeListOf<HTMLElement> | null;
  };
  vars?: {
    [key: string]: string | number | object | null;
  };
}

export interface IComponent {
  cfg: ICfg;
  init(el: HTMLElement): void;
  setElements?(rootElement: HTMLElement): void;
  bind?(): void;
}
