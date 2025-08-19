import { StaticImageData } from "next/image";

declare global {
  type Option<A = unknown, B = unknown> = {
    label: string;
    value: A;
    icon?: StaticImageData;
    extra?: B;
  };
}

export {};
