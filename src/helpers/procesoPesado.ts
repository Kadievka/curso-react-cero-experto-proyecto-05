const procesoPesado = (iteraciones: number) => {
  for (let i = 0; i < iteraciones; i++) {
    console.log("Allí vamos");
  }
  return `${iteraciones} iteraciones realizadas.`;
}

export default procesoPesado;