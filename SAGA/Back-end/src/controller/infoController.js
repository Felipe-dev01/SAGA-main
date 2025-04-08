import { prisma } from '../util/prisma.js'

export class InfoController {
    async info(req, res) {
        const matricula = parseInt(req.params.matri, 10)

        try {
            const info = await prisma.user.findMany({
                where: { matricula },
                select: {
                    matricula: true,
                    nome: true,
                    email: true,
                    dt_nasc: true,
                    telefone: true,
                    cpf: true,
                    ft_perfil: true,
                    tipo: true,
                }
            })

            if (!info) {
                return res.status(404).json({ message: 'Usuário não encontrado' })
            }

            return res.status(200).json(info)
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar informações', error: error.message })
        }
    }
}
