"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#6daae8" // Измененный цвет на синий
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
