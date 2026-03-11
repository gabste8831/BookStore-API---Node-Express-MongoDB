import NaoEncontrado from "../erros/naoEncontrado.js";

/* eslint-disable no-unused-vars */
function manupulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

export default manupulador404;