import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [open, setOpen] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const dispatch = useDispatch();
  const onEditProfilePage = useSelector(
    (state: RootState) => state.switchOnOff
  );
  useEffect(() => {
    setOpen(!open);
  }, [onEditProfilePage]);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    <h1>프로필</h1>
                    <hr />
                    <img
                      src="/media/cc0-images/grapefruit-slice-332-332.jpg"
                      alt="Grapefruit slice atop a pile of other slices"
                    />
                    <span>
                      <h1>이름</h1>
                      <h1
                        onClick={() => {
                          setShowEditProfile(true);
                          setOpen(false);
                        }}
                      >
                        편집
                      </h1>
                    </span>
                    <div> 자리비움</div>
                    <div> 현재 시간</div>
                    <div>
                      <button>상태 설정</button>
                      <button>다음으로.. drop</button>
                      <button> ...</button>
                    </div>
                    <hr />

                    {/* /End replace */}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {showEditProfile && <EditProfile />}
    </>
  );
};

export default Profile;
