import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";
import { globalStyles } from "../../styles/global";
import { AuthProvider } from "../contexts/AuthContext";
import { SidebarProvider } from "../contexts/Sidebar";
import "../../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SidebarProvider>
            {globalStyles()}
            <Component {...pageProps} />
          </SidebarProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
