import type {TrpcRouter} from '@app/backend/src/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';


const trpc = createTRPCReact<TrpcRouter>()

const queryClient = new QueryClient({
defaultOptions: {
    queries: {
        retry: false,
        refetchOnWindowFocus: false
    }
}
})

const trpcClient = trpc.createClient({
    links:[
httpBatchLink({
    url: 'http://localhost:5433/trpc'
})
    ]
})


export const TrpcProvaider = ({children}: {children: React.ReactNode}) => {
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}