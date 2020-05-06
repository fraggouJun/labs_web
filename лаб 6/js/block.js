let r_text = new Array();
r_text[0] = "Що людина робить, така вона і є.";
r_text[1] = "Все, що робиш, треба робити добре, навіть якщо здійснюєш божевілля.";
r_text[2] = "Уміння відмовитися від виконання несуттєвих справ є вирішальною умовою для успіху.";
r_text[3] = "Найретельніше слід перевіряти правильність суджень, які здаються нам очевидними.";
r_text[4] = "Уникайте тих, хто намагається підірвати вашу віру в себе. Ця риса властива дрібним людям. Велика людина, навпаки, вселяє вам відчуття, що і ви зможете стати великим.";
r_text[5] = "Ідіть і робіть; ви завжди встигнете виправдатися пізніше.";
r_text[6] = "Пробним каменем першокласного інтелекту є здатність утримувати в розумі дві протилежні ідеї одночасно і все-таки зберігати можливість діяти.";

let i = Math.random();
i = 7 * i;
i = Math.floor(i);

document.write(r_text[i]);




function newFunction() {
    document.getElementById("menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.icon')) {

        const dropdown = document.getElementsByClassName("widgetList");
        let i;
        for (i = 0; i < dropdown.length; i++) {
            const openDropdown = dropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

