console.log('js work')
const data = [
    {
        id: 1,
        task: 'Create initial layout for homepage',
        status: 'Approved'
    },
    {
        id: 2,
        task: 'Fixing icons with transparent background',
        status: 'In Progress'
    },
    {
        id: 3,
        task: 'Create initial layout for homepage',
        status: 'In Progress'
    },
    {
        id: 4,
        task: 'Discussions regarding workflow improvment',
        status: 'In Progress'
    },
    {
        id: 5,
        task: 'Create quotation for app redesign project',
        status: 'In Progress'
    },
    {
        id: 6,
        task: 'Create initial layout for homepage',
        status: 'In Review'
    },
    {
        id: 7,
        task: 'Create initial layout for homepage',
        status: 'Waiting'
    },
]

const newData = []

const loadData = ()=>{
    let tasks = ''
    data.forEach((menu, index)=>{
        tasks += `
        <li class="nav-item">
            <div class="form-group">
                <input onclick="addChecklist(${index})"  type="checkbox" name="list${index}" id="list">
            </div>
            <p>${menu.task}</p>
            <div class="status ${menu.status}">${menu.status}</div>
            </li>
        `
    })
    
    document.getElementById('task-list').innerHTML = tasks;
}


const addCheck = ()=>{
    data.push({
        ...data[Math.floor(Math.random() * data.length)]
    })
    loadData()
}