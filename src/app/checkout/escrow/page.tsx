'use client';

import { useSearchParams } from 'next/navigation';
import EscrowCheckoutPage from '@/components/escrow/EscrowCheckoutPage';

export default function EscrowCheckoutPageRoute() {
  const searchParams = useSearchParams();
  
  // Get parameters from URL query string
  const projectId = parseInt(searchParams.get('projectId') || '1');
  const offerId = parseInt(searchParams.get('offerId') || '1');
  const transactionId = searchParams.get('transactionId') || undefined;

  return (
    <EscrowCheckoutPage
      projectId={projectId}
      offerId={offerId}
      transactionId={transactionId}
    />
  );
}