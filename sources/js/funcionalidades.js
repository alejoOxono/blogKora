
document.addEventListener("DOMContentLoaded", () => {
    cargarVista('contenido.html', 'contenido');   
});

document.getElementById('blog-menu').addEventListener('click', function(e) {
    e.preventDefault();
    cargarVista('blog.html', 'contenido');  
});

document.getElementById('home-menu').addEventListener('click', function(e) {
    e.preventDefault();
    cargarVista('contenido.html', 'contenido');  
});

async function cargarVista(ruta, vista) {
    try {
        const response = await fetch(ruta);
        if (response.ok) {
            const contenido = await response.text();
            document.getElementById(vista).innerHTML = contenido;
        } else {
            document.getElementById(vista).innerHTML = 'No se pudo cargar el ' + vista;
        }
    } catch (error) {
        document.getElementById(vista).innerHTML = 'Error al cargar el ' + vista;
        console.error('Error:', error);
    }
}
