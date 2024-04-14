function agregarMiembros() {
    const numMiembros = document.getElementById('num-miembros').value;
    const miembrosContainer = document.getElementById('miembros-container');
    
    miembrosContainer.innerHTML = ''; 
    
    for (let i = 0; i < numMiembros; i++) {
        const miembroDiv = document.createElement('div');
        miembroDiv.className = 'input-group';
        
        const miembroLabel = document.createElement('label');
        miembroLabel.textContent = `Miembro ${i + 1}:`;
        
        const miembroInput = document.createElement('input');
        miembroInput.type = 'text';
        miembroInput.id = `miembro-${i}`;
        
        miembroDiv.appendChild(miembroLabel);
        miembroDiv.appendChild(miembroInput);
        
        if (i < 8) {
            const cargoLabel = document.createElement('label');
            cargoLabel.textContent = 'Cargo:';
            
            const cargoInput = document.createElement('input');
            cargoInput.type = 'text';
            cargoInput.id = `cargo-${i}`;
            
            miembroDiv.appendChild(cargoLabel);
            miembroDiv.appendChild(cargoInput);
        }
        
        miembrosContainer.appendChild(miembroDiv);
    }
}

function crearJunta() {
    const nombreJunta = document.getElementById('nombre-junta').value;
    const ubicacionJunta = document.getElementById('ubicacion-junta').value;
    const fechaCreacion = document.getElementById('fecha-creacion').value;
    const numMiembros = document.getElementById('num-miembros').value;
    
    const miembros = [];
    const cargos = [];
    
    for (let i = 0; i < numMiembros; i++) {
        const miembro = document.getElementById(`miembro-${i}`).value;
        miembros.push(miembro);
        
        if (i < 8) {
            const cargo = document.getElementById(`cargo-${i}`).value;
            cargos.push(cargo);
        } else {
            cargos.push('');
        }
    }
    
    const junta = {
        nombre: nombreJunta,
        ubicacion: ubicacionJunta,
        fecha_creacion: fechaCreacion,
        num_miembros: numMiembros,
        miembros: miembros,
        cargos: cargos,
    };
    
    mostrarDetallesJunta(junta);
}

function mostrarDetallesJunta(junta) {
    const detallesVentana = document.getElementById('detalles-ventana');
    const detallesActa = document.getElementById('detalles-acta');
    
    detallesActa.innerHTML = `
        <p>Estado - Activo</p>
        <p>Nombre: ${junta.nombre}</p>
        <p>Ubicación: ${junta.ubicacion}</p>
        <p>Fecha de Creación: ${junta.fecha_creacion}</p>
        <p>Número de miembros: ${junta.num_miembros}</p>
        <p>Miembros:</p>
        ${junta.miembros.map((miembro, index) => `
            <p>${index + 1}. ${miembro} - ${junta.cargos[index]}</p>
        `).join('')}
    `;
    
    document.getElementById('login-form').style.display = 'none';
    detallesVentana.style.display = 'block';
}

function imprimirActa() {
    
    console.log('Imprimiendo acta...');
}

function descargarActa() {
    
    console.log('Descargando acta...');
}
