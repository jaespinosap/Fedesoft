const init = () => {
  const alumnos ={
      pepito:{
          materia: 'biologia',
          nota: 2.5
      },
      juanito:{
          materia: 'matematicas',
          nota: 4.5
      },
      pedrito:{
        materia: 'filosofia',
        nota: 5.0
    }
  };
  let names = Object.keys(alumnos);
  let body = document.getElementById('notes_body');
  let head = document.getElementById('notes_head');
  for (let key in alumnos){
      let tr = document.createElement('tr');
      if(names.indexOf(key) == 0) {
        var trh = document.createElement('tr');
        head.appendChild(trh);
        let th = document.createElement('th');
        th.innerHTML = 'alumno';
        trh.appendChild(th);
        }
      body.appendChild(tr);
      let td = document.createElement('td');
      td.innerHTML=key;
      tr.appendChild(td);
      for(let i in alumnos[key]){
        if(names.indexOf(key) == 0){

            let th = document.createElement('th');
            th.innerHTML = i;
            trh.appendChild(th);
        }
        let td = document.createElement('td');
        td.innerHTML=alumnos[key][i];

        tr.appendChild(td);
        if(i == 'nota'){
            if(names.indexOf(key) == 0){

                let th = document.createElement('th');
                th.innerHTML = 'Estado';
                trh.appendChild(th);
            }
            let td = document.createElement('td');
            td.innerHTML = alumnos[key].nota >= 3.0 ? 'aprueba' : 'reprueba';
            tr.appendChild(td);
        }
        
      }
  }
}
