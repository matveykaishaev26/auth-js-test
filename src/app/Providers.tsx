"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <ProgressBar
          height="4px"
          color="#6daae8" // Измененный цвет на синий
          options={{ showSpinner: false }}
          shallowRouting
        />
      </NextThemesProvider>
    </>
  );
};

export default Providers;
