import { type } from "os";
import Link from "next/link";
import styles from "../../styles/components/pageLink.module.scss"
type Props = {
  title: string;
};

const pageLink = (props: Props) => {
  return (
    <div className={styles.pageLink}>
      <Link href={props.title}>
        <a>{props.title}</a>
      </Link>
    </div>
  );
};
export default pageLink;
