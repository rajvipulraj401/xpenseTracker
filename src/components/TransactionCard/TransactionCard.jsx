import React from "react";
import styles from "./TransactionCard.module.css";
import { IoMdPizza } from "react-icons/io"; // Food icon
import { MdMovie } from "react-icons/md"; // Entertainment icon
import { CiRollingSuitcase } from "react-icons/ci"; // Travel icon
import { FaEdit, FaTimes } from "react-icons/fa"; // Edit/Delete
import { TiDeleteOutline, TiDelete } from "react-icons/ti";
const iconMap = {
  Food: <IoMdPizza size={26} />,
  Entertainment: <MdMovie size={26} />,
  Travel: <CiRollingSuitcase size={26} />,
};

const TransactionCard = ({
  title,
  date,
  price,
  category,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.transactionCard}>
      {/* Left Icon */}
      <div className={styles.leftIcon}>
        <div className={styles.iconCircle}>{iconMap[category]}</div>
      </div>

      {/* Text Details */}
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
      </div>

      {/* Price */}
      <div className={styles.price}>₹{price}</div>

      {/* Buttons */}
      <div className={styles.actions}>
        <button
          // className={styles.deleteBtn}
          onClick={onDelete}
          style={{ backgroundColor: "red" }}
          className={styles.btn}
        >
          <TiDeleteOutline size={32} />
        </button>

        <button
          // className={styles.editBtn}
          style={{ backgroundColor: "orange" }}
          onClick={onEdit}
          className={styles.btn}
        >
          <FaEdit size={22} />
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
