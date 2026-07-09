import { Url } from "next/dist/shared/lib/router/router";
import { JSX, ReactElement } from "react";
import { contactFormSchema } from "./schemas/contact.schema";
import { z } from "zod";

export interface NavbarOptions {
  label: string;
  link: Url;
}
export interface SocialMedia {
  label: string;
  icon: ReactElement;
  link: string;
}
export interface IconListProps {
  stack: {
    label: string;
    icon: JSX.Element;
  }[];
}

export type ContactFormProps = z.infer<typeof contactFormSchema>;
