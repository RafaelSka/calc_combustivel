async function fecthProfileGasolina() {

    const url = 'https://atlas.jifo.co/api/connectors/61163d31-566c-42c8-8abe-4bc9172fb4c7';

    const fetching = await fetch(url)
    return await fetching.json()
}

async function fecthProfileEtanol() {

    const url = 'https://atlas.jifo.co/api/connectors/8dcc705a-6bb3-4f21-ab44-f764540ceff6';

    const fetchinEtn = await fetch(url)
    return await fetchinEtn.json()
}

async function fecthProfileGNV() {

    const url = 'https://atlas.jifo.co/api/connectors/d486b454-245d-4fbf-9fd9-181a9bad8a45';

    const fetching = await fetch(url)
    return await fetching.json()
}