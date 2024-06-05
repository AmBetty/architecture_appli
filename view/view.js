class TaskRenderer {
    render(task, index) {
        throw new Error('Method render must be implemented');
    }
}

function renderTempl(index, description, color){
    return `
            <tr style="background-color: ${color}; color: white;">
            
                <td class="task-number">${index + 1}</td>
                <td class="task-description">${description}</td>
            </tr>
        `;
}

class WorkTaskRenderer extends TaskRenderer {
    render(task, index) {
        return renderTempl(index, task.description, 'red')
    }
}

class HomeTaskRenderer extends TaskRenderer {
    render(task, index) {
        return renderTempl(index, task.description, "blue")
    }
}

class OtherTaskRenderer extends TaskRenderer {
    render(task, index) {
        return renderTempl(index, task.description, "green")
    }
}

function renderTasks(filter = null) {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = '';

    const categorySelect = document.getElementById('category-select');

    let tasksToRender = taskManager.getAllTasks();

    if (filter && filter !== 'Sélectionner une catégorie') {
        // Filtrer les tâches par catégorie sélectionnée
        tasksToRender = tasksToRender.filter(task => task.category === filter);
    }

    tasksToRender.forEach((task, index) => {
        let renderer;
        switch (task.category) {
            case 'WORK':
                renderer = new WorkTaskRenderer();
                break;
            case 'HOME':
                renderer = new HomeTaskRenderer();
                break;
            case 'OTHER':
                renderer = new OtherTaskRenderer();
                break;
            default:
                throw new Error('Invalid category');
        }
        
        taskListContainer.innerHTML += renderer.render(task, index);
    });

    
    
}
