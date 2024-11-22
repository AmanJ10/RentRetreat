import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Cancel() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    console.log("Payment cancelled for session:", sessionId);
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Failed!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your payment has been failed.
        </p>

        <p className="text-sm text-gray-500">
          If you have any questions or need further assistance, please contact
          support.
        </p>
      </div>
    </div>
  );
}

export default Cancel;
