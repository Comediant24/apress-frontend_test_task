import styles from "./Table.module.css"
import Thead from "../../../features/TopTable/Table/Thead/Thead";
import Tbody from "../../../features/TopTable/Table/Tbody/Tbody";


const Table = ({products}) => {
  return (
    <table className={styles.topTable}>
      <Thead />
      <Tbody products={products} />
    </table>
  )
};

export default Table;