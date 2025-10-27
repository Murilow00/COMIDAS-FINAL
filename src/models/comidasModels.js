import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontrarTodos = async () => {

    return await prisma.comida.findMany({
        orderBy: {id: 'asc'}
    })
}

export const encontrarUm = async (id) => {
    return await prisma.comida.findUnique({
        where: {id: id}
    })
}

export const criarComida = async (dado) => {
    return await prisma.comida.create({
        data: {
            nome: dado.nome,
            valor: dado.nome
        }
    })
}


export const deletarComida = async (id) => {
    return await prisma.comida.delete({
        where: {id: Number(id)}
    })
}