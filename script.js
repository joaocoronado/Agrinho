  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnInterativo");

    // Cria a aba de informações
    const abaInfo = document.createElement("div");
    abaInfo.id = "abaSustentabilidade";
    abaInfo.style.display = "none";
    abaInfo.style.position = "fixed";
    abaInfo.style.top = "50%";
    abaInfo.style.left = "50%";
    abaInfo.style.transform = "translate(-50%, -50%)";
    abaInfo.style.background = "#fff";
    abaInfo.style.padding = "20px";
    abaInfo.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    abaInfo.style.borderRadius = "10px";
    abaInfo.style.width = "300px";
    abaInfo.style.zIndex = "1000";

    abaInfo.innerHTML = `
        <h2>Sustentabilidade no Agro</h2>
        <p>A sustentabilidade no agronegócio busca equilibrar a produção de alimentos com a preservação do meio ambiente, utilizando práticas como rotação de culturas, uso consciente da água e redução de agrotóxicos.</p>
        <button id="fecharAba">Fechar</button>
    `;

    document.body.appendChild(abaInfo);

    // Abrir aba
    botao.addEventListener("click", () => {
        abaInfo.style.display = "block";
    });

    // Fechar aba
    abaInfo.querySelector("#fecharAba").addEventListener("click", () => {
        abaInfo.style.display = "none";
    });
});
