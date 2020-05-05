import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SuccessPage: React.FC = () => {
  const {
    query: { itemName },
  } = useRouter();

  return (
    <>
      <h1>Thank you for buying {itemName}!</h1>

      <Link href="/">Go back</Link>
    </>
  );
};

export default SuccessPage;
