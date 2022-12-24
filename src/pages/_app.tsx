import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";
import { globalStyles } from "../../styles/global";
import { AuthProvider } from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {globalStyles()}
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
