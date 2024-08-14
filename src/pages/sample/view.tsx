import { Button, STYLE } from "../../components/button";
import { Card } from "../../components/card";
import { EmptyState } from "../../components/empty";
import { ErrorFetch } from "../../components/error";

interface Props {
  showError: boolean;
  setShowError: (value: boolean) => void;
}

const View = ({ showError, setShowError }: Props) => {
  return (
    <Card>
      <EmptyState />
      <Button
        icon="hand-pointer"
        onClick={() => setShowError(true)}
        text="Mostrar toast"
        style={STYLE.DANGER}
      />
      {showError && (
        <ErrorFetch error={"Error demo"} cb={() => setShowError(false)} />
      )}
    </Card>
  );
};

export { View };
