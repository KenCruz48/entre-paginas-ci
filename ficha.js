const formulario = document.querySelector("#ficha");
const descargar = document.querySelector("#descargar");
const aviso = document.querySelector("#aviso");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const datos = new FormData(formulario);
  const lineas = [
    "Entre páginas — Propuesta de lectura",
    "",
    "Título: " + datos.get("titulo").trim(),
    "Propuesta de: " + datos.get("nombre").trim(),
    "Correo: " + datos.get("correo").trim(),
  ];
  const motivo = datos.get("motivo").trim();
  if (motivo) {
    lineas.push("", motivo);
  }

  const archivo = new Blob([lineas.join("\n")], { type: "text/plain;charset=utf-8" });
  const direccion = URL.createObjectURL(archivo);
  const enlace = document.createElement("a");
  enlace.href = direccion;
  enlace.download = "propuesta-de-lectura.txt";
  document.body.append(enlace);
  enlace.click();
  enlace.remove();
  window.setTimeout(() => URL.revokeObjectURL(direccion), 1000);
  aviso.textContent = "Tu ficha está lista. Revisa las descargas del navegador.";
});

descargar.disabled = false;
