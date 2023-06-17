import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';

const index = async (req: Request, res: Response) => {
  const departamentos = await Departamentos.findAll();
  res.render('departamento/index', {
    departamentos: departamentos.map((departamento) => departamento.toJSON()),
  });
};
const create = async (req: Request, res: Response) => {
  if (req.route.methods.get) {
    res.render('departamento/create');
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
      });
    }
  }
};
const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
