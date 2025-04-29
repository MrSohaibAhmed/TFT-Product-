"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material"; // << important
import "./global.css";
import { DashboardContextProvider } from './context/DashboardContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 }}>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          <DashboardContextProvider>
            <Box
              sx={{
                minHeight: "100vh",
                bgcolor: "background.default",
                color: "text.primary",
              }}
            >
              {children}
            </Box>
          </DashboardContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
