import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Cancel() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    console.log("Payment cancelled for session:", sessionId);
  }, [sessionId]);

  return <div>Payment Cancelled! You can try booking again.</div>;
}

export default Cancel;
