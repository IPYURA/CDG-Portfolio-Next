import styles from "@/styles/projects.module.scss";

const Slider = () => {
    return (
        <div className={styles.slider}>
            slider 영역입니다.
            <button className={styles.prev}>이전</button>
            <button className={styles.next}>다음</button>
            <div className={styles.slideFrame}>
                
            </div>
        </div>
    )
}

export default Slider;