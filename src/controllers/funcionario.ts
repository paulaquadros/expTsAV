import e, { Request, Response } from 'express';
import { Funcionarios } from '../models/Funcionarios';
import { Departamentos } from '../models/Departamentos';

const index = async (req: Request, res: Response) => {
  const funcionarios = await Funcionarios.findAll();

  res.render('funcionario/index', {
    funcionarios: funcionarios.map((funcionario) => funcionario.toJSON()),
    csrf: req.csrfToken(),
  });
};
const create = async (req: Request, res: Response) => {
  const departamentos = await Departamentos.findAll();

  console.log(departamentos);

  if (req.route.methods.get) {
    res.render('funcionario/create', {
      csrf: req.csrfToken(),
      departamentos: departamentos.map((departamento) => departamento.toJSON()),
    });
  } else {
    const funcionario = req.body;
    try {
      await Funcionarios.create(funcionario);
      res.redirect('/funcionario');
    } catch (error: any) {
      console.log(departamentos);
      console.error(error);
      res.render('funcionario/create', {
        funcionario,
        errors: error.errors,
        csrf: req.csrfToken(),
      });
    }
  }
};

const read = async (req: Request, res: Response) => {
  const idFuncionario = req.params.id;

  const funcionario = await Funcionarios.findByPk(idFuncionario);

  if (!funcionario) {
    return res.redirect('/funcionario');
  }

  res.render('funcionario/index', {
    funcionarios: [funcionario.toJSON()],
    csrf: req.csrfToken(),
  });
};
const update = async (req: Request, res: Response) => {
  const idFuncionario = req.params.id;

  if (req.route.methods.get) {
    const funcionarioInfo = (
      await Funcionarios.findByPk(idFuncionario)
    )?.toJSON();
    res.render('funcionario/update', {
      funcionario: funcionarioInfo,
      csrf: req.csrfToken(),
    });
  } else {
    const funcionario = req.body;
    try {
      await Funcionarios.update(funcionario, {
        where: { id: idFuncionario },
      });
      res.redirect('/funcionario/index');
    } catch (error: any) {
      console.error(error);
    }
  }
};

const remove = async (req: Request, res: Response) => {
  const idFuncionario = req.params.id;
  try {
    await Funcionarios.destroy({ where: { id: idFuncionario } });
    res.redirect('/funcionario/index');
  } catch (error: any) {
    console.error(error);
  }
};

export default { index, create, read, update, remove };
