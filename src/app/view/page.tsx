
//test commit
//anoter change
const getTodos = async () => {
    try {
        const resp = await fetch('https://dummyjson.com/todos')
        const todos = await resp.json()
        console.log(todos)
        return todos
    } catch (err) {
        console.error(err)
    }
}

const View = async () => {

    const todos = await getTodos()

    return (
        <section>
            <div className="m-3 p-3">

            </div>
        </section>
    )
}

export default View