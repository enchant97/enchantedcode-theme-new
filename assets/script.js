ThemeChanger.themes = {
    os: {
        name: "OS",
        css: null,
    },
    light: {
        name: "Light",
        css: [
            ["color-scheme", "light"],
            ["--body-bg", "var(--body-bg--light)"],
            ["--sub-bg", "var(--sub-bg--light)"],
            ["--sub2-bg", "var(--sub2-bg--light)"],
            ["--sub3-bg", "var(--sub3-bg--light)"],
            ["--main-fg", "var(--main-fg--light)"],
            ["--faded-fg", "var(--faded-fg--light)"],
            ["--site-color-scheme", "var(--site-color-scheme--light)"],
        ]
    },
    dark: {
        name: "Dark",
        css: [
            ["color-scheme", "dark"],
            ["--body-bg", "var(--body-bg--dark)"],
            ["--sub-bg", "var(--sub-bg--dark)"],
            ["--sub2-bg", "var(--sub2-bg--dark)"],
            ["--sub3-bg", "var(--sub3-bg--dark)"],
            ["--main-fg", "var(--main-fg--dark)"],
            ["--faded-fg", "var(--faded-fg--dark)"],
            ["--site-color-scheme", "var(--site-color-scheme--dark)"],
        ]
    },
};

ThemeChanger.theme_picker_parent = document.querySelector("main");
ThemeChanger.selected_theme_css_class = "active";

document.getElementById("theme-toggle-bnt").addEventListener("click", ThemeChanger.toggle_theme_picker);

ThemeChanger.on_load();
