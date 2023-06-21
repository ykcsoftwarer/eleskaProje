import React from "react";
import Modal from "antd/es/modal/Modal";
import Button from "antd/lib/button";
import '../../index.css'

const ExitModal = ({isModalOpen,handleCancel,handleOk}) => {
  return (
    <Modal
     width={"380px"}
      className="text-center md-position sm:p-0 py-6 px-4 rounded-none bg-white h-60 sm:h-44  "
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button
          className="cancelBtn rounded-none sm:text-sm sm:mb-6"
          key="back"
          onClick={handleCancel}
        >
          İPTAL
        </Button>,
        <Button
          className="okBtn bg-red-primary text-white sm:w-22 rounded-none sm:text-sm "
          key="link"
          href="/"
          type="danger"
          onClick={handleOk}
        >
          ÇIKIŞ YAP
        </Button>,
      ]}
    >
      <p className="text-lg m-auto mb-2">
        Çıkış yapmak istediğinize emin misiniz?{" "}
      </p>
    </Modal>
  );
};

export default ExitModal;
