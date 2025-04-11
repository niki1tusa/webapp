import type {TrpcRouter} from '../../backend/src/trpc.ts'
import { createTRPCReact } from '@trpc/react-query';


const trpc = createTRPCReact<TrpcRouter>()