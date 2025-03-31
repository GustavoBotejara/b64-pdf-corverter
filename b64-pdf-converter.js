function converterParaPDF() {
    let b64 = document.getElementById('inp').value

    var bin = atob(b64);
    console.log('File Size:', Math.round(bin.length / 1024), 'KB');
    
    var obj = document.createElement('object');
    obj.style.width = '100%';
    obj.style.height = '842pt';
    obj.type = 'application/pdf';
    obj.data = 'data:application/pdf;base64,' + b64;
    document.body.appendChild(obj);
    
    var link = document.createElement('a');
    link.innerHTML = 'Download PDF file';
    link.download = 'file.pdf';
    link.href = 'data:application/octet-stream;base64,' + b64;
    document.body.appendChild(link);

    document.getElementById('conv').remove()
}
