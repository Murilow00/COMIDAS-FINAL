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
            valor: dado.valor
        }
    })
}


export const deletarComida = async (id) => {
    return await prisma.comida.delete({
        where: {id: Number(id)}
    })
}

export const atualizar = async (id, dado) => {
    return await prisma.comida.update({
        where: { id: Number(id)},
        data: {
            ...(dado.nome && { nome: dado.nome}),
            ...(dado.preco && { preco: dado.preco}), 
        }
    })
}