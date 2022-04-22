function create_element_anchor(parent) {
    if (!parent.id) { return }

    let anchor = document.createElement("a");
    anchor.classList.add("page-anchor");
    anchor.title = "Anchor For: '" + parent.innerText + "'";
    anchor.href = document.location.href + "#" + parent.id;
    anchor.innerText = "¶";

    parent.append(anchor);
}

function add_article_anchors() {
    let headings = document.querySelectorAll('#main article :is(h1, h2, h3, h4, h5, h6)');
    headings.forEach(heading => {
        create_element_anchor(heading);
    });
}

function setup_theme_picker_bnt() {
    let picker_bnt = document.getElementById("theme-toggle-bnt")
    picker_bnt.addEventListener("click", ThemeChanger.toggle_theme_picker);
    picker_bnt.classList.remove("hidden");
}

function setup_back_to_top() {
    let bnt = document.createElement("a");
    bnt.id = "to-top-bnt";
    bnt.innerText = "To Top";
    bnt.href = "#";
    document.addEventListener("scroll", _ => {
        if (window.scrollY > 200) {
            bnt.style.display = "block";
        } else {
            bnt.style.display = "none";
        }
    });
    document.body.append(bnt);
}

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
ThemeChanger.on_load();

setup_theme_picker_bnt();
add_article_anchors();
setup_back_to_top()
