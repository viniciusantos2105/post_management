export default (err: any) => ({
  erro: err.name as string,
  mensagem: err.message as string,
  detalhes: err.details as any[],
});
