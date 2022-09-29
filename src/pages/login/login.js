export default () => {
    const container = document.createElement("div");

    const template = 
    `
    <section class="container-login">
    <img class= "logo" id= "logo" src="./img/logo.png" alt="logo"> 
    <h1>Bem-vinde, ao Miacolhe!</h1>
        <form>
          <input name="" id="" placeholder="Insira seu e-mail"></input>
          <input name="" id="" placeholder="Insira sua senha"></input>
          <button class="btn" type="submit">Entrar</button>
        </form>
        <div class="lines"></div>
        <button class="btn">Login com Google</button>
        <div class="lines"></div>
        <button class="btn">Clique aqui para se cadastrar</button>
    </section>
    `;

    container.innerHTML = template;

    return container;
}