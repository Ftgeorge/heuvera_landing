'use client';

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';
import { ReactNode } from 'react';

interface Props extends Omit<ThemeProviderProps, 'children'> {
    children: ReactNode;
}

export function ThemeProvider({
    children,
    attribute = 'class',
    defaultTheme = 'system',
    enableSystem = true,
}: Props) {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
        >
            {children}
        </NextThemesProvider>
    );
}
