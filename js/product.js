function updateproduct(){
    const color= document.getElementById('colorselect').value;
    const size= document.getElementById('sizeselect').value;
    const productpreview= document.getElementById('productpreview');
    window.addEventListener('load', () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const imageUpload = document.getElementById('imageUpload');
      
        imageUpload.addEventListener('change', handleImage):
        function handleImage(e) {
            const reader = new FileReader();
            reader.onload = function(event) {
              const img = new Image(unnamed.jpg);
              img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
              }
              img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);
          }
        });