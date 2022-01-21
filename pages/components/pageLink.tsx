import { type } from "os";
import Link from "next/link";
type Props = {
  title: string;
};

const pageLink = (props: Props) => {
  return (
    <div>
      <Link href={props.title}>
        <a>{props.title}</a>
      </Link>
    </div>
  );
};
export default pageLink;
