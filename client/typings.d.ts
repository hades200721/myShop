/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  // @ts-ignore
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module 'react-transition-group';
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
