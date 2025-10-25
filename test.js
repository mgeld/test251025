
let login = 'admin'

let isAdmin

if (login === 'adkkd') {
    isAdmin = false
}

if (login === 'admin') {
    isAdmin = true
} else {
    isAdmin = false
}

switch (login) {
    case 'admin':
        isAdmin = false;
        break;
    case 'admin':
        isAdmin = true;
    default:
        isAdmin = false
}

function hi(name = 'Гость') {
    // name = name || 'Гость'
    console.log('привет, ' + name)
}

hi()