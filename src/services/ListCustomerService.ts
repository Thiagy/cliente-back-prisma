import prismaClient from "../prisma";



class ListCustomerService{
    
    async execute(){

        const costumer = await prismaClient.customer.findMany()

        return costumer
 
   }

}

export default ListCustomerService