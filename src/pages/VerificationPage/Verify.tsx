import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import VerificationSomethingWentWrong from './component/VerificationSomethingWentWrong';
import VerificationSuccessful from './component/VerificationSuccessful';
import VerificationLoading from './component/VerificationLoading';

type VerificationStatus = 'Success' | 'Error' | 'Pending';

const apiBaseUrl = import.meta.env.VITE_API;

const Verify = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>('Pending');

  useEffect(() => {
    const verify = async () => {
      const url = `${apiBaseUrl}/iam/auth/verification/${token}`;
      try {
        await axios.get(url);
        setVerificationStatus('Success');
      } catch (err) {
        setVerificationStatus('Error');
      }
    };

    verify();
  }, []);

  if (verificationStatus === 'Pending') return <VerificationLoading />;
  if (verificationStatus === 'Error') return <VerificationSomethingWentWrong />;
  if (verificationStatus === 'Success') return <VerificationSuccessful />;

  return null;
};

export default Verify;
