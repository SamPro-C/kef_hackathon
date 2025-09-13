'use client';

import { useState, useEffect } from 'react';
import CountUp, { CountUpProps } from 'react-countup';

const ClientCountUp = (props: CountUpProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CountUp {...props} />;
};

export default ClientCountUp;
