declare global {
  type Option<A = unknown, B = unknown> = {
    label: string;
    value: A;
    icon?: React.ReactNode;
    extra?: B;
  };
}

export {};
