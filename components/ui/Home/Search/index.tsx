import styles from './search.module.scss';

export default function Search() {
    return (
        <section className={styles.search}>
            <select>
                <option>Select property status</option>
                <option>sales</option>
                <option>rentals</option>
            </select>
            <select>
                <option>Select property location</option>
                <option>Westlands</option>
                <option>Parklands</option>
                <option>General Mathenge</option>
                <option>Kilimani</option>
                <option>Kileleshwa</option>
            </select>
            <select>
                <option>Select property type</option>
                <option>Townhouses</option>
                <option>Apartments</option>
                <option>Penthouse</option>
                <option>Plot</option>
                <option>Villa</option>
                <option>Studio</option>
                <option>GuestHouse</option>
            </select>
            <button>Search &rarr;</button>
        </section>
    )
}
