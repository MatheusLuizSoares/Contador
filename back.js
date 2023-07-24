function contar() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  // Se o inicio ou fim ou passo estiver vazio, ele vai dar alerta para corrigir
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert("[Erro] Faltam dados");
    res.innerHTML = "Impossível contar";
  } else {
    res.innerHTML = "Contando";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    
    if (p <= 0) {
      window.alert("Passo inválido! Considerando Passo 1");
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
  }
}