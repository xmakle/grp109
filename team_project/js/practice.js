    // define input and preview areas 
    const htmlInput = document.getElementById('htmlInput');
    const cssInput = document.getElementById('cssInput');
    const jsInput = document.getElementById('jsInput');
    const preview = document.getElementById('preview');

    // update preview area
    function updatePreview() {
        const htmlContent = htmlInput.value;
        const cssContent = `<style>${cssInput.value}</style>`;
        const jsContent = `<script>${jsInput.value}<\/script>`;

        const fullContent = `
            ${htmlContent}
            ${cssContent}
            ${jsContent}
        `;

        preview.srcdoc = fullContent;
    }

    htmlInput.addEventListener('input', updatePreview);
    cssInput.addEventListener('input', updatePreview);
    jsInput.addEventListener('input', updatePreview);
