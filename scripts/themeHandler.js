const checkbox = document.getElementById("checkbox");
var sitename = "fdb-theme";
const CurrentTheme = localStorage.getItem(sitename)
    ? localStorage.getItem(sitename)
    : null;

window.onload = Startup();

function Startup() {
    if (CurrentTheme) {
        document.documentElement.setAttribute("data-theme", CurrentTheme);

        if (CurrentTheme === "dark") {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    } else {
        GetSysColorMode();
    }
}

checkbox.addEventListener("change", () => {
    IfChecked();
});

function GetSysColorMode() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem(sitename, "dark");
        checkbox.checked = true;
    } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem(sitename, "light");
        checkbox.checked = false;
    }
}

function IfChecked() {
    if (checkbox.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem(sitename, "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem(sitename, "light");
    }
}