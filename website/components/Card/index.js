import styles from './Card.module.css'

export default function Card({
    title="title",
    description="description",
    bgColor,
    borderColor

}) {
    return (
        <div className={styles.cards} style={{
            backgroundColor: bgColor,
            borderColor: borderColor

        }}>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    )
}