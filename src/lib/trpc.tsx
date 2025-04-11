import type {TrcpRouter} from '@app/'
import { createTRPCReact } from '@trpc/react-query';


const trpc = createTRPCReact<TrpcRouter>()