// update preview
function updatePreview() {
  const html = document.getElementById("htmlInput").value;
  const css = `<style>${document.getElementById("cssInput").value}</style>`;
  const js = `<script>${document.getElementById("jsInput").value}<\/script>`;

  const output = html + css + js;
  const iframe = document.getElementById("preview");
  const doc = iframe.contentDocument || iframe.contentWindow.document;

  doc.open();
  doc.write(output);
  doc.close();
}

document.getElementById("htmlInput").addEventListener("input", updatePreview);
document.getElementById("cssInput").addEventListener("input", updatePreview);
document.getElementById("jsInput").addEventListener("input", updatePreview);
