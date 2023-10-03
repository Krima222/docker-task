import classes from './Page.module.css'

export default async function Page() {
    const res = await fetch('http://158.160.60.245/api/post');

    const { data: { attributes } } = await res.json() as any

    return (
        <div className={classes.page}>
            <span>{attributes.description}</span>
        </div>
    )
}