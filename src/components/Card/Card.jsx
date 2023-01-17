import React from "react";
import styles from "./Card.module.scss";

function Card({ card, setItems }) {
  return (
    <div className={styles.Card}>
      <div onClick={() => setItems(card.id)} className={`${styles.CardBlock} ${styles[card.activeStatus]}`}>
        <div className={styles.descriptionBlock}>
          <div className={styles.rectangle}>
            <div className={styles.backdrop}></div>
          </div>
          <div className={styles.description}>
            <p>{card.description}</p>
            <div className={styles.backdrop}></div>
          </div>
        </div>
        <div className={styles.cardBody}>
          <h2>{card.name}</h2>
          <h3>{card.composition}</h3>
          <p>{card.additional}</p>
          <div className={styles.size}>
            <p>
              {card.size} <br /> <span>КГ</span>
            </p>
          </div>

          <div className={styles.backdrop}></div>
        </div>
      </div>
      <div className={styles.selectedText}>
        {card.activeStatus === "default" ? (
          <p>
            Чего сидишь? Порадуй котэ, <span onClick={() => setItems(card.id)}>купи</span>
          </p>
        ) : (
          <p>{card.status[card.activeStatus]}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
