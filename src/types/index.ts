// ! class name interface
export interface IClassName {
  className?: string;
}

// ! with children prop
export interface IParentComponent extends IClassName {
  children: React.ReactNode;
}

// ! navigation component
export interface INavigationComponent extends IClassName {
  hasBackButton: boolean;
  info: string;
  step: string;
}

// ! aside
export interface IAsideTextComponent extends IClassName {
  text: string;
}

// ! main content
export interface ITextProps extends IClassName {
  text: string;
}
