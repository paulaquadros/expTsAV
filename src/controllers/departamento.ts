import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';

const index = async (req: Request, res: Response) => {
  const departamentos = await Departamentos.findAll();
  res.render('departamento/index', { departamentos });
};
const create = async (req: Request, res: Response) => {
  if (req.route.methods.get) {
    res.render('departamento/create');
  } else {
    const departamento = req.body;
    try {
      await Departamentos.create(departamento);
    } catch (error) {
      console.error(error);
    }
  }
};
const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
