export interface CreatePaymentDto {
    applicationId: string;
    amount: number;
    paymentMethod: 'CARD' | 'BANK_TRANSFER' | 'OTHER';
    cardToken?: string;
  }