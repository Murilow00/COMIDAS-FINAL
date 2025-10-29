import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const comidas = [
    { nome: 'Arroz com Feijão', valor: '12.50' },
    { nome: 'Lasanha Bolonhesa', valor: '24.90' },
    { nome: 'Pizza de Calabresa', valor: '32.00' },
    { nome: 'Hambúrguer Artesanal', valor: '27.50' },
    { nome: 'Batata Frita', valor: '10.00' },
    { nome: 'Macarrão Carbonara', valor: '22.80' },
    { nome: 'Frango Grelhado', valor: '18.90' },
    { nome: 'Salada Caesar', valor: '16.50' },
    { nome: 'Strogonoff de Frango', valor: '21.00' },
    { nome: 'Panqueca de Carne', valor: '19.00' },
    { nome: 'Bife à Parmegiana', valor: '26.50' },
    { nome: 'Feijoada Completa', valor: '25.00' },
    { nome: 'Coxinha', valor: '6.50' },
    { nome: 'Empada de Frango', valor: '7.00' },
    { nome: 'Pastel de Carne', valor: '8.00' },
    { nome: 'Esfirra Aberta', valor: '5.50' },
    { nome: 'Quibe Frito', valor: '6.00' },
    { nome: 'Tapioca de Queijo', valor: '9.50' },
    { nome: 'Pão de Queijo', valor: '4.00' },
    { nome: 'Crepioca de Frango', valor: '11.00' },
    { nome: 'Açaí com Granola', valor: '14.50' },
    { nome: 'Sorvete de Chocolate', valor: '9.00' },
    { nome: 'Brigadeiro', valor: '3.50' },
    { nome: 'Pudim de Leite', valor: '6.00' },
    { nome: 'Bolo de Cenoura', valor: '7.50' },
    { nome: 'Panetone', valor: '18.00' },
    { nome: 'Torta de Limão', valor: '12.00' },
    { nome: 'Mousse de Maracujá', valor: '8.50' },
    { nome: 'Café Expresso', valor: '4.50' },
    { nome: 'Cappuccino', valor: '7.00' },
    { nome: 'Suco Natural', valor: '6.00' },
    { nome: 'Refrigerante Lata', valor: '5.00' },
    { nome: 'Água Mineral', valor: '3.00' },
    { nome: 'Suco Detox', valor: '8.00' },
    { nome: 'Chá Gelado', valor: '5.50' },
    { nome: 'Panqueca de Frango', valor: '18.00' },
    { nome: 'Omelete de Queijo', valor: '12.00' },
    { nome: 'Wrap de Frango', valor: '15.00' },
    { nome: 'Pizza Portuguesa', valor: '33.00' },
    { nome: 'Pizza Marguerita', valor: '30.00' },
    { nome: 'Pizza Quatro Queijos', valor: '34.00' },
    { nome: 'Escondidinho de Carne', valor: '22.00' },
    { nome: 'Yakissoba', valor: '23.00' },
    { nome: 'Camarão ao Alho e Óleo', valor: '40.00' },
    { nome: 'Filé de Tilápia', valor: '28.00' },
    { nome: 'Sopa de Legumes', valor: '14.00' },
    { nome: 'Caldo Verde', valor: '13.50' },
    { nome: 'Tapioca Doce', valor: '10.00' },
    { nome: 'Brownie', valor: '9.00' },
    { nome: 'Croissant', valor: '6.50' },
    { nome: 'Creme de Avelã', valor: '12.50' },
  ]

  await prisma.comida.createMany({ data: comidas })

  console.log('🌱 Seed rodado com sucesso: 50 comidas inseridas!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
