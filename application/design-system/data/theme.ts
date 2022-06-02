export interface Theme {
  mode: 'auto' | 'light' | 'dark';
  palette: {};
  typography: {
    family: string;
  };
}

export interface ThemeProperties {
  mode?: 'auto' | 'light' | 'dark';
  palette?: {
    default: {},
    surface: {},
    element: {},
    accent: string
  };
  typography: {
    family: string;
  };
}

const defaultTheme: Theme = {
  mode: 'auto',
  palette: {
    default: {},
    surface: {},
    element: {},
    accent: "hotpink"
  },
  typography: {
    family: 'Poppins',
  },
};

export default (props: ThemeProperties = defaultTheme): Theme => {
  return {
    mode: props.mode,
    palette: props.palette,
    typography: {
      family: props.typography.family,
    },
  };
};
