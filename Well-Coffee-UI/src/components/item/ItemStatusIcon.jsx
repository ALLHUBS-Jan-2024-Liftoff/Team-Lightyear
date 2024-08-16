import { useState } from "react";
import { CheckCircle, WarningCircle } from "iconoir-react";

const DisplayStatusIcon = ({ item }) => {
  const determineStatus = item => {
    return item.quantity <= item.minQuantity ? true : false;
  };

  const [itemStatus, setItemStatus] = useState(determineStatus(item));

  return (
    <>
      {itemStatus ? (
        <WarningCircle color="red" height={36} width={36} />
      ) : (
        <CheckCircle color="green" height={36} width={36} />
      )}
    </>
  );
};

export default DisplayStatusIcon;
