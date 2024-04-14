
    function agregarCampos() {
        const numMiembros = document.getElementById("numMiembros").value;
        const juntaForm = document.getElementById("juntaForm");


        const miembrosJunta = document.querySelectorAll("#juntaForm .miembro, #juntaForm .cargo");
        miembrosJunta.forEach(item => item.remove());


        for (let i = 0; i < numMiembros; i++) {
            const miembroLabel = document.createElement("label");
            miembroLabel.innerHTML = `Miembro ${i + 1}:`;
            const miembroInput = document.createElement("input");
            miembroInput.type = "text";
            miembroInput.classList.add("miembro");

            juntaForm.appendChild(miembroLabel);
            juntaForm.appendChild(miembroInput);

            if (i < 8) {
                const cargoLabel = document.createElement("label");
                cargoLabel.innerHTML = "Cargo:";
                const cargoInput = document.createElement("input");
                cargoInput.type = "text";
                cargoInput.classList.add("cargo");

                juntaForm.appendChild(cargoLabel);
                juntaForm.appendChild(cargoInput);
            }
        }
    }

    function crearJunta() {
        const nombre = document.getElementById("nombre").value;
        const ubicacion = document.getElementById("ubicacion").value;
        const fechaCreacion = document.getElementById("fechaCreacion").value;
        const numMiembros = document.getElementById("numMiembros").value;

        const miembrosInputs = document.querySelectorAll("#juntaForm .miembro");
        const cargosInputs = document.querySelectorAll("#juntaForm .cargo");
        const miembros = [];
        const cargos = [];

        miembrosInputs.forEach(input => miembros.push(input.value));
        cargosInputs.forEach(input => cargos.push(input.value));

        document.getElementById("nombreJunta").innerText = `Nombre: ${nombre}`;
        document.getElementById("ubicacionJunta").innerText = `Ubicación: ${ubicacion}`;
        document.getElementById("fechaJunta").innerText = `Fecha de Creación: ${fechaCreacion}`;
        document.getElementById("numMiembrosJunta").innerText = `Número de miembros: ${numMiembros}`;

        const miembrosJunta = document.getElementById("miembrosJunta");
        miembrosJunta.innerHTML = ""; 
        miembros.forEach((miembro, index) => {
            const listItem = document.createElement("li");
            const cargo = cargos[index] ? ` - ${cargos[index]}` : "";
            listItem.innerText = `${index + 1}. ${miembro}${cargo}`;
            miembrosJunta.appendChild(listItem);
        });

        document.getElementById("detallesJunta").classList.add("active");
    }
    function imprimirJunta() {
       
        const detallesJunta = document.getElementById('detallesJunta').innerHTML;
        
     
        const ventanaImpresion = window.open('', '_blank');
        ventanaImpresion.document.write(`
            <html>
                <head>
                    <title>Imprimir Junta de Acción Comunal</title>
                </head>
                <body>
                    ${detallesJunta}
                </body>
            </html>
        `);
        
        ventanaImpresion.document.close(); 
        ventanaImpresion.print(); 
    }
    
    function descargarJunta() {
       
        const detallesJunta = document.getElementById('detallesJunta').innerHTML;
    
        
        const blob = new Blob([`
            <html>
                <head>
                    <title>Acta de la Junta de Acción Comunal</title>
                </head>
                <body>
                    ${detallesJunta}
                </body>
            </html>
        `], { type: 'text/html' });
        
      
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'junta_accion_comunal.html'; 
        document.body.appendChild(a);
        a.click(); 
        document.body.removeChild(a); 
    }