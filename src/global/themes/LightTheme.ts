import { MD3Theme, MD3LightTheme } from 'react-native-paper';
import { transparentize, lighten } from 'polished';

export const LightTheme: MD3Theme = {
    ...MD3LightTheme,
    dark: false,
    isV3: true,
    version: 3,
    mode: 'adaptive',
    colors: {
        ...MD3LightTheme.colors,
        primary: '#0078BC',
        onPrimary: lighten(0.1, '#0078BC'),
        primaryContainer: lighten(0.9, '#0078BC'),
        onPrimaryContainer: lighten(0.1, '#0078BC'),
        secondary: '#36BEB6',
        onSecondary: lighten(1, '#36BEB6'),
        secondaryContainer: lighten(0.9, '#36BEB6'),
        onSecondaryContainer: lighten(0.1, '#36BEB6'),
        tertiary: '#161719',
        onTertiary: lighten(1, '#161719'),
        tertiaryContainer: lighten(0.9, '#161719'),
        onTertiaryContainer: lighten(0.1, '#161719'),
        error: '#FF8181',
        onError: lighten(1, '#FF8181'),
        errorContainer: lighten(0.9, '#FF8181'),
        onErrorContainer: lighten(0.1, '#FF8181'),
        // surface: '#FCFCFF',
        // onSurface: lighten(1, '#FCFCFF'),
        // surfaceVariant: lighten(0.5, '#FCFCFF'),
        // surfaceDisabled: lighten(0.5, '#FCFCFF'),
        // onSurfaceDisabled: lighten(1, '#FCFCFF'),
        // onSurfaceVariant: lighten(1, '#FCFCFF'),
        background: '#F1F1F1',
        onBackground: lighten(1, '#F1F1F1'),
        shadow: '#000',
        backdrop: transparentize(0.5, '#000'),
    }
};