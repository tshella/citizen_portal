export interface Payment {
    id: string;
    applicationId: string;
    amount: number;
    status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
    transactionId?: string;
    paymentDate: Date;
    paymentMethod: 'CARD' | 'BANK_TRANSFER' | 'OTHER';
    receiptUrl?: string;
    metadata?: Record<string, unknown>;
  }