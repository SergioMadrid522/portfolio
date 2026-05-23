import { Url } from "next/dist/shared/lib/router/router";
import { JSX, ReactElement } from "react";

export interface NavbarOptions {
  label: string;
  link: Url;
}
export interface SocialMedia {
  label: string;
  icon: ReactElement;
  link: string;
}
