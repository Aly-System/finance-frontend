export default function transform() {
    const style = {
        // textAlign: 'center',
    }
    const titles = [
        'Codigo Cta',
        'Nombre Cta',
        // <div style={style}>Cta Padre</div>,
        'Cta Padre',
        'Naturaleza de la cuenta',
        'Accion',
    ]
    const transformAccounts = data => {
        const lista = []

        data?.forEach(element => {
            lista.push({
                hidden: element,
                a: element.account,
                b: element.title,
                c: element.father.name,
                // c: <div style={style}>{element.fatherAccount}</div>,
                d: element.nature_of_the_account,
                e: element.rucs,
            })
        })

        return lista
    }

    return {
        titles,
        transformAccounts,
    }
}
