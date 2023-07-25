export interface IRoute {
  path: string;
  Component?: React.FC;
  children?: IRoute[];
  description?: string;
  image?: string;
}
