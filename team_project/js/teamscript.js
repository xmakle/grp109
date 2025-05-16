const selector = document.getElementById("memberSelector");
    const themeLink = document.getElementById("themeStylesheet");

    selector.addEventListener("change", function () {
      const selected = this.value;
      const cssFile = selected === "default" ? "default.css" : `${selected}.css`;
      themeLink.href = cssFile;

      // hide all content sections
      document.querySelectorAll(".content").forEach(div => {
        div.style.display = "none";
      });

      // show selected member’s content
      const content = document.getElementById(`content-${selected}`);
      if (content) content.style.display = "block";
    });
