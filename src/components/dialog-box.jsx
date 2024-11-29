/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import React from "react";
import Button from "./ui/button";
import MapComponent from "./map-component";

function DialogBox({ locations }) {
  const [address, setAddresses] = React.useState({
    startAddress: "",
    endAddress: "",
  });
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const mount = React.useMemo(() => {
    setAddresses({
      startAddress: "Dehiwala-Mount Lavinia",
      endAddress: locations[0],
    });
  }, [locations]);

  return (
    <div>
      <Button
        title={"See the location on map"}
        onClick={onOpenModal}
        className={
          "bg-slate-900 text-white hover:text-white hover:bg-slate-500"
        }
      />
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          modal: {
            backgroundColor: "#fff",
            width: "768px",
            paddingBottom: "20px",
          },
        }}
      >
        <h2 className="text-xl font-semibold mb-8">Map</h2>
        <div className="max-w-screen-md h-full flex justify-center">
          {address.startAddress && address.endAddress ? (
            <MapComponent
              startAddress={address.startAddress}
              endAddress={address.endAddress}
            />
          ) : null}
        </div>
      </Modal>
    </div>
  );
}

export default DialogBox;
