const manage404 = (req, res) => {
    res.status(404).json({
      msj: "404 not found",
      img: "https://t3.ftcdn.net/jpg/05/59/55/28/360_F_559552850_Qca6ZAulEZk0Lm7TrceTdBI3D2YwRM1b.jpg",
    });
  };
  
  module.exports = manage404;
  // Última ruta por defecto. En caso de no encotrarse ninguna anterior, devolvemos un 404
  // Para rutas no existentes
  // app.get("*", (req, res) => {
  //     res.status(404).send("Gatito triste - 404 not found");
  //   });
  