// -------------------------
// GALERIA DE IMAGENS
// -------------------------
const imagemPrincipal = document.querySelector(".imagem-principal");
const miniaturas = document.querySelectorAll(".miniaturas img");

// Função para trocar imagem com animação
function trocarImagem(novaSrc) {
  imagemPrincipal.classList.add("fade-out");

  setTimeout(() => {
    imagemPrincipal.src = novaSrc;
    imagemPrincipal.classList.remove("fade-out");
    imagemPrincipal.classList.add("fade-in");

    setTimeout(() => imagemPrincipal.classList.remove("fade-in"), 300);
  }, 250);
}

// Evento de clique nas miniaturas
miniaturas.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    trocarImagem(thumb.src);

    // Destacar miniatura selecionada
    miniaturas.forEach((img) => img.classList.remove("ativa"));
    thumb.classList.add("ativa");
  });
});

// -------------------------
// SELEÇÃO DE TAMANHO
// -------------------------
const botoesTamanho = document.querySelectorAll(".botoes-tamanho button");
let tamanhoSelecionado = null;

botoesTamanho.forEach((btn) => {
  btn.addEventListener("click", () => {
    botoesTamanho.forEach((b) => b.classList.remove("ativo"));
    btn.classList.add("ativo");
    tamanhoSelecionado = btn.textContent;
  });
});

// -------------------------
// AÇÕES DOS BOTÕES
// -------------------------
const btnComprar = document.querySelector(".comprar");
const btnCarrinho = document.querySelector(".carrinho");

// Simulação de compra imediata
btnComprar.addEventListener("click", () => {
  if (!tamanhoSelecionado) {
    alert("Selecione um tamanho antes de comprar!");
    return;
  }

  alert(`✅ Compra do tamanho ${tamanhoSelecionado} confirmada!`);
  // Aqui poderia redirecionar para uma página de checkout, ex:
  // window.location.href = "checkout.html";
});

// Adicionar ao carrinho
btnCarrinho.addEventListener("click", () => {
  if (!tamanhoSelecionado) {
    alert("Selecione um tamanho antes de adicionar ao carrinho!");
    return;
  }

  alert(`🛒 Produto (tamanho ${tamanhoSelecionado}) adicionado ao carrinho!`);
  // Aqui poderia salvar em localStorage ou API:
  // adicionarAoCarrinho(produtoId, tamanhoSelecionado);
});

// -------------------------
// ANIMAÇÕES (CSS adicionadas via JS)
// -------------------------
const style = document.createElement("style");
style.textContent = `
  .fade-out {
    opacity: 0;
    transform: scale(0.97);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .fade-in {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .miniaturas img.ativa {
    border: 2px solid #e72a2a;
    transform: scale(1.05);
  }

  .botoes-tamanho button.ativo {
    border-color: #e72a2a;
    color: #e72a2a;
    font-weight: 600;
  }
`;
document.head.appendChild(style);
