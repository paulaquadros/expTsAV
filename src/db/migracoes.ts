export interface MigracaoDB {
  consultas?: Array<{ model: string; query: string }>;
}

const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();

migracoes.set(1, {
  consultas: [
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios DROP idade;`,
    },
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios DROP fone;`,
    },
  ],
});

export { migracoes };
