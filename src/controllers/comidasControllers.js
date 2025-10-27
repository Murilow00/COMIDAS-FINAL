import * as comidasModels from "../models/comidasModels.js";

export const listarTodos = async (req, res) => {
  try {
    const comidas = await comidasModels.encontrarTodos();

    if (!comidas || comidas.length === 0) {
      res.status(404).json({
        total: 0,
        mensagem: "Não há comidas na lista",
        comidas,
      });
    }
    res.status(200).json({
      total: comidas.length,
      mensagem: "lista de comidas",
      comidas,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro interno de servidor",
      detalhes: error.message,
      codigo: 500,
    });
  }
};

export const listarUm = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const comi = await comidasModels.encontrarUm(id);

    if (!comi) {
      return res.status(404).json({
        erro: "Comida não encontrada",
        mensagem: "Verifique o id da comida",
        id: id,
      });
    }
    res.status(200).json({
      message: "Comida encontrada",
      data: comi,
    });
  } catch (error) {
    res.status(500).json({
      erro: "erro interno de servidor",
      detalhes: error.message,
      codigo: 500,
    });
  }
};

export const criar = async (req, res) => {
  try {
    const { nome, valor } = req.body;

    const data = { nome, valor };

    const camposObrigatorios = ["nome", "valor"];
    const faltando = camposObrigatorios.filter((campo) => !data[campo]);

    console.log(typeof(valor))

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(",")}`,
      });
    }

    const novaComida = await comidasModels.criarComida(req.body);

    res.status(201).json({
      mensagem: "Comida criada com sucesso",
      comida: novaComida,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao criar comida",
      detalhes: error.message,
    });
  }
};
