fetch('/taches')

.then(res=> res.json())

.then(tasks=> {

    const list = document.getElementById('tasks');

    tasks.forEach(task => {

        list.innerHTML += `

        <li>

            <h3 style="
            text-decoration:
            ${task.estTerminee ? 'line-through' : 'none'}   
            ">
            ${task.titre}
            </h3>
            
            <p>${task.description}</p>

            <p>Terminée : ${task.estTerminee ? 'Oui' : 'Non'}</p>

            <a href="details.html?id=${task.id}">
                <button>Détails</button>
            </a>

            <button onclick="deleteTask(${task.id})">
            Supprimer
            </button>

        </li>

        `;
            });
            });

            async function deleteTask(id) {

    await fetch(`/taches/${id}`, {

        method: 'DELETE'

    });

    location.reload();

}