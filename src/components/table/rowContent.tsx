import clsx from "clsx";

interface Props {
  contentRow: object;
}

const RowContent = ({ contentRow }: Props) => {
  return (
    <div className={clsx(["d-flex", "flex-column"])}>
      {Object.entries(contentRow).map((entry) => (
        <div key={entry.join("_")}>
          {entry[0]}:{entry[1]}
        </div>
      ))}
    </div>
  );
};

export { RowContent };
