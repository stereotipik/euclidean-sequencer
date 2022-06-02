/** @jsx jsx */
import { jsx, ThemeProvider, ThemeProviderProps } from '@emotion/react';

export interface ThemeProviderProperties extends ThemeProviderProps {}

export default function Component({
  theme,
  children,
}: ThemeProviderProperties) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
