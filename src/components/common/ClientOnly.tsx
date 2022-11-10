import React, { useEffect, useState } from 'react'

interface CilentOnlyProps {
  children : React.ReactNode;
}

const ClientOnly : React.FC<CilentOnlyProps> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

    return <div {...delegated}>{children}</div>;

}

export default ClientOnly