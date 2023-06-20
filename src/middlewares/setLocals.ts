import { Request, Response, NextFunction } from 'express';

// Middleware que seta variáveis globais
const setLocals = (req: Request, res: Response, next: NextFunction) => {
  res.locals.logado = req.cookies['logado'];
  next();
};

export default setLocals;
