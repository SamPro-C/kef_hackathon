'use client';

import { useState, useEffect } from 'react';
import CountUp, { CountUpProps } from 'react-countup';

const ClientCountUp = (props: CountUpProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // You can render a placeholder or null on the server
    // to avoid the hydration mismatch.
    return <span>{props.end}</span>;
  }

  return <CountUp {...props} />;
};

export default ClientCountUp;
