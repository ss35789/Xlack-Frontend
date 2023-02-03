const ChannelSetting = () => {
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
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="mt-10 sm:mt-0">
              {/*내부*/}
              <div className="wrapper-center max-w-md">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white py-5 sm:p-6">
                      <h1 className="flex text-lg">Edit your Profile</h1>
                      <hr />

                      <h1>hihi</h1>
                    </div>
                  </div>
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

export default ChannelSetting;
