const MainPageBody = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="space-y-5 w-1/2 text-justify rounded-xl shadow-lg p-10 border border-gray-100 backdrop-blur-2xl bg-gradient-to-br from-yellow-100 via-purple-50 to-green-100">
        <div className="space-y-2">
          <span className="indent-1 text-2xl font-sofia">
            Routes In Backend
          </span>
          <div className="flex justify-center w-[200px] relative">
            <div className="w-[40px] rounded-md h-1 bg-purple-400 transition-transform animation-infinite  duration-1000 ease-in-out transform origin-center hover:scale-x-[5]" />
          </div>
        </div>
        <br />
        <div className="flex items-center">
          <span className="span-head">Login</span>
          <p className="indent-[105px] i">http://localhost:3000/users/login</p>
        </div>
        <div className="flex items-center">
          <span className="span-head">Register</span>
          <p className="indent-[82px] i">
            http://localhost:3000/users/register
          </p>
        </div>
        <div className="flex items-center">
          <span className="span-head">Register</span>
          <p className="indent-[82px] i">
            http://localhost:3000/users/register
          </p>
        </div>
        <div className="flex items-center">
          <span className="span-head">OTP Login</span>
          <p className="indent-[72px] i">
            http://localhost:3000/users/otpLogin
          </p>
        </div>
        <div className="flex items-center">
          <span className="span-head">OTP Verification</span>
          <p className="indent-[22px] i">
            http://localhost:3000/users/verifyOTP
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-sky-50 w-[500px] rounded-r-lg">
          <div className="h-8 w-1 bg-sky-200 rounded-lg"></div>
          <p>Note: All the API's are POST Request Only</p>
        </div>
      </div>
    </div>
  );
};

export default MainPageBody;
