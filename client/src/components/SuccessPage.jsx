import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      // Optionally confirm booking details or perform additional actions
      console.log("Payment successful, session ID:", sessionId);
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your payment has been processed successfully. Thank you for your
          booking!
        </p>
        <p className="text-lg text-gray-700 mb-6">
          You can view your bookings and manage them by visiting the
          <Link
            to="/account/bookings"
            className="text-blue-500 hover:underline"
          >
            {" "}
            My Bookings{" "}
          </Link>{" "}
          section under your account.
        </p>
        <p className="text-sm text-gray-500">
          If you have any questions or need further assistance, please contact
          support.
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
