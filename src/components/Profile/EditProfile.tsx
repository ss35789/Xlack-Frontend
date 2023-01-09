import defaultImg from "./defaultProfileImg.jpeg";
import styled from "styled-components";

const EditProfile = () => {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="mt-10 sm:mt-0">
              {/*내부*/}

              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="flex">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-4">
                              <div className="col-span-6 sm:col-span-4">
                                <label
                                  htmlFor="email-address"
                                  className="flex text-sm font-medium text-gray-700"
                                >
                                  Full name
                                </label>
                                <input
                                  type="text"
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-4">
                                <label
                                  htmlFor="email-address"
                                  className="flex text-sm font-medium text-gray-700"
                                >
                                  Display name
                                </label>
                                <input
                                  type="text"
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <h1 className="text-sm text-left opacity-50">
                                  This could be your first name, or a nickname —
                                  however you’d like people to refer to you in
                                  Slack.
                                </h1>
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label
                                  htmlFor="email-address"
                                  className="flex text-sm font-medium text-gray-700"
                                >
                                  Title
                                </label>
                                <input
                                  type="text"
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  className="mt-1 block w-ful h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Time zone
                                </label>
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                  <option>United States</option>
                                  <option>Canada</option>
                                  <option>Mexico</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h1 className="flex text-sm font-medium text-gray-700">
                              Profile photo
                            </h1>
                            <img src={defaultImg} width="200" height="200" />
                            <CustomButton>Upload Photo</CustomButton>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/*내부*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CustomButton = styled.button`
  margin-top: 10px;
  display: inline-block;
  padding: 1px 40px;
  border: 1px solid #4f4f4f;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  color: black;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  :after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #39bda7;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  :hover {
    color: #ffffff;
    border: 1px solid #39bda7;
  }

  :hover:before {
    top: -35%;
    background-color: #39bda7;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  :hover:after {
    top: -45%;
    background-color: #39bda7;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

export default EditProfile;
