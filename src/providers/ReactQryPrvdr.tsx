import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { PropsWithChildren } from "react"

const ReactQryPrvdr = ({children}: PropsWithChildren) => {

// query client
const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
    </QueryClientProvider>
  )
}

export default ReactQryPrvdr