"use client";

import { useState } from "react";
import FactorAuthCard from "./FactorAuthCard";
import AuthAppIcon from "@public/icons/auth-app.svg";
import EmailIcon from "@public/icons/mail.svg";
import Button from "@/components/Button/Button";
import AuthAppModal from "./AuthAppModal";
import EmailModal from "./EmailModal";

const SecurityTab = () => {
  const [selected, setSelected] = useState("auth");
  const [openModal, setOpenModal] = useState<"auth" | "email" | null>(null);
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleSelect = (method: "auth" | "email") => {
    setSelected(method);
    setOpenModal(method);
  };

  const closeModal = () => setOpenModal(null);

  return (
    <div className="border border-darkmode-100 bg-darkmode-200 p-4 md:p-8 rounded-xl">
      <p className="text-white font-semibold text-base">
        Two-Factor Authentication (2FA)
      </p>
      <p className="mt-1 text-grey-300">
        Add a layer of protection to your account
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <FactorAuthCard
          Icon={AuthAppIcon}
          name="Authenticator App"
          security="MORE SECURE"
          value="auth"
          nameAttr="2fa"
          checked={selected === "auth"}
          onChange={setSelected}
          onSelect={() => handleSelect("auth")}
        />

        <FactorAuthCard
          Icon={EmailIcon}
          name="Email"
          security="LESS SECURE"
          value="email"
          nameAttr="2fa"
          checked={selected === "email"}
          onChange={setSelected}
          onSelect={() => handleSelect("email")}
        />
      </div>

      <div className="mt-8 flex items-center lg:justify-end">
        <Button className="!text-xs px-4 py-[11px]">
          Enable Two Factor Authentication
        </Button>
      </div>

      {openModal === "auth" && (
        <AuthAppModal
          qrCodeValue={qrCodeValue}
          open={true}
          onClose={closeModal}
        />
      )}
      {openModal === "email" && <EmailModal open={true} onClose={closeModal} />}
    </div>
  );
};
export default SecurityTab;
