import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import createCustomerControler from './controlers/createCustomerControler'
import ListCustomerControler from './controlers/ListCustomerControler'
import DeleteCustomerControler from './controlers/DeleteCustomerControler'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{

        return new createCustomerControler().handle(request, reply)

    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply)=>{

        return new ListCustomerControler().handle(request, reply)

    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{

        return new DeleteCustomerControler().handle(request, reply)

    })
    
}