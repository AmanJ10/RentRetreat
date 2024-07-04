import { useEffect, useState } from "react";

function ClientOnly() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(function () {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return <div></div>;
}

export default ClientOnly;
