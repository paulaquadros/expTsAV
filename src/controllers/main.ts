import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.render('main/about');
};

const ui = (req: Request, res: Response) => {
  res.render('main/ui');
};

const createCookie = (req: Request, res: Response) => {
  // função para criar um cookie
  if (!req.cookies['nomeCookie']) {
    res.cookie('nomeCookie', 'valorCookie'); // método cookie recebe dois parâmetros: nome e valor e cria um cookie
    res.send('NUNCA passou por aqui');
  } else {
    res.send('Já passou por aqui');
  }
};

const clearCookie = (req: Request, res: Response) => {
  res.clearCookie('nomeCookie'); // método clearCookie recebe o nome do cookie e o apaga
  res.send('Cookie apagado!');
};

const login = (req: Request, res: Response) => {
  if (req.route.methods.get) {
    res.render('main/login');
  } else {
    const { username, senha } = req.body;
    if (username === 'user' && senha === '12345') {
      res.cookie('logado', true);
      res.redirect('/');
    } else {
      res.render('main/login', { username, senha, senhaIncorreta: true });
    }
  }
};

const logout = (req: Request, res: Response) => {
  res.clearCookie('logado');
  res.redirect('/');
};

export default { index, about, ui, clearCookie, createCookie, login, logout };

// commiting changes
