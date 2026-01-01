import {
  createTheme,
  responsiveFontSizes,
  type PaletteMode,
} from "@mui/material";

// 공통 팔레트 값
const commonPalette = {
  primary: {
    main: "#0288d1",
  },
  success: {
    main: "#2e7d32",
  },
};

// 공통 타이포그래피
const typography = {
  fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
  h1: { fontWeight: 700 },
  h2: { fontWeight: 700 },
  h3: { fontWeight: 700 },
  h4: { fontWeight: 700 },
  h5: { fontWeight: 700 },
  h6: { fontWeight: 700 },
};

// 공통 컴포넌트 스타일
const getComponents = (mode: PaletteMode) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: mode === "dark" ? "#1f1f1f" : "#ffffff",
        transition: "background-color 0.3s ease, color 0.3s ease",
      },
    },
  },
});

// 라이트 테마
export const createLightTheme = () =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "light",
        ...commonPalette,
        secondary: {
          main: "#f6f6f6",
        },
        info: {
          main: "#fff",
        },
        divider: "#797979",
        text: {
          primary: "#404040",
          secondary: "#797979",
        },
        background: {
          default: "#ffffff",
          paper: "#ffffff",
        },
      },
      typography,
      components: getComponents("light"),
    })
  );

// 전체 테마
export const theme = createTheme({
  colorSchemes: {
    light: createLightTheme(),
    dark: undefined,
  },
});
