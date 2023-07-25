export interface INavbarLinks {
  to: string;
  name: string;
  exact?: boolean;
  onClick?: () => void;
}
