import e, { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';

const index = async (req: Request, res: Response) => {
  const departamentos = await Departamentos.findAll();
  res.render('departamento/index', {
    departamentos: departamentos.map((departamento) => departamento.toJSON()),
    csrf: req.csrfToken(),
  });
};
const create = async (req: Request, res: Response) => {
  if (req.route.methods.get) {
    res.render('departamento/create', {
      csrf: req.csrfToken(),
    });
  } else {
    const departamento = req.body;
    try {
      await Departamentos.create(departamento);
      res.redirect('/departamento');
    } catch (error: any) {
      console.error(error);
      res.render('departamento/create', {
        departamento,
        errors: error.errors,
        csrf: req.csrfToken(),
      });
    }
  }
};

const read = async (req: Request, res: Response) => {
  const idDepartamento = req.params.id;
  // console.log(idDepartamento);

  const departamento = await Departamentos.findByPk(idDepartamento);

  if (!departamento) {
    return res.redirect('/departamento');
  }

  res.render('departamento/index', {
    departamentos: [departamento.toJSON()],
    csrf: req.csrfToken(),
  });
};
const update = async (req: Request, res: Response) => {
  const idDepartamento = req.params.id;

  if (req.route.methods.get) {
    const departamentoInfo = (
      await Departamentos.findByPk(idDepartamento)
    )?.toJSON();
    res.render('departamento/update', {
      departamento: departamentoInfo,
      csrf: req.csrfToken(),
    });
  } else {
    const departamento = req.body;
    try {
      await Departamentos.update(departamento, {
        where: { id: idDepartamento },
      });
      res.redirect('/departamento/index');
    } catch (error: any) {
      console.error(error);
    }
  }
};

const remove = async (req: Request, res: Response) => {
  const idDepartamento = req.params.id;
  try {
    await Departamentos.destroy({ where: { id: idDepartamento } });
    res.redirect('/departamento/index');
  } catch (error: any) {
    console.error(error);
  }
};

export default { index, create, read, update, remove };
