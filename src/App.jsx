import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("submitted", data);
  }

  return (
    <div className="bg-slate-200 flex justify-center items-center h-screen">
      <form
        className="w-[500px] flex-col pt-22 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex bg-white flex-col justify-center items-center p-10 px-32 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <label className="font-medium">Full Name:</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={`border shadow-lg w-96 p-2 rounded-md transition-all duration-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${
                errors.fullName
                  ? "border-red-700 bg-red-100"
                  : "border-gray-300"
              }`}
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name must be at least 3 characters",
                },
                maxLength: {
                  value: 6,
                  message: "Full name must be at most 6 characters",
                },
              })}
            />
            {errors.fullName && (
              <p className="text-red-700 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <br />

          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <label className="font-medium">Email:</label>
            <input
              type="text"
              placeholder="Enter your email"
              className={`border shadow-lg w-96 p-2 rounded-md transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${
                errors.email ? "border-red-700 bg-red-100" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-700 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <br />

          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <label className="font-medium">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`border shadow-lg w-96 p-2 rounded-md transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${
                errors.password
                  ? "border-red-700 bg-red-100"
                  : "border-gray-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one number, and one special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-700 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <input
            className={`bg-blue-500 text-white p-3 px-8 rounded-md mt-4 font-medium transition-all duration-300
            ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 cursor-pointer"
            }
            `}
            disabled={isSubmitting}
            value={isSubmitting ? "Loading..." : "Submit"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
