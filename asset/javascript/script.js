function gerarSenha() {
  let caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let tamanhoDaSenha = 15;
  let senha = "";

  for (let i = 0; i < tamanhoDaSenha; i++) {
    let aleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[aleatorio];
  }

  document.getElementById("senha").value = senha;

  // Exibir o botao de copiar a senha após gerar!

  document.getElementById("copiarSenha").style.display = "inline-block";
}

function copiarSenha() {
  let textoSenha = document.getElementById("senha");

  if (textoSenha.value === "") {
    alert("Não há senha para copiar");
    return;
  } else {
    alert("Senha copiada para a área de transferência!");
  }

  textoSenha.select();
  textoSenha.setSelectionRange(0, 99999); //PARA DISITIVOS MOBILES

  navigator.clipboard.writeText(textoSenha.value);

  then(() => {
    alert("Senha copiada para a área de transferência!");
  }).catch((err) => {
    console.error("Erro ao copiar senha: ", err);
    alert("Erro ao copiar senha. Tente novamente.");
  });
}
