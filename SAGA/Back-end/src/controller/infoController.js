import { prisma } from '../util/prisma.js'

export class InfoController{
   async info(req, res){
        const email = req.params.email
        const info = await prisma.user.findUnique({ where: {email}})

        return res.status(204).json({info})
    }
}