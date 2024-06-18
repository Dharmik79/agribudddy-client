import React, { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "./icons/closeIcon";

const ModalWrapper = ({
  open,
  setOpen,
  title,
  children,
  modalFooter,
  width = "sm:max-w-4xl",
  childrenClass,
  falseFooter = false,
  ...props
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center lg:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full ${width}`}
              >
                <div className="flex items-center justify-between h-16 gap-3 px-5 bg-primary text-white">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="flex">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 transition hover:rotate-90 !outline-none"
                      onClick={setOpen}
                    >
                      <span className="sr-only">Close panel</span>
                      <CloseIcon />
                    </button>
                  </div>
                </div>
                <div className={`p-5  overflow-auto ${childrenClass}`}>
                  {children}
                </div>
                {!falseFooter && (
                  <div className="flex items-center justify-end gap-3 px-4 py-4 bg-gray-100 modal-footer">
                    {modalFooter}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalWrapper;
