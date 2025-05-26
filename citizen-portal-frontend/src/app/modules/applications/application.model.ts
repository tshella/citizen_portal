export interface Application {
    id: string;
    userId: string;
    serviceId: string;
    applicationData: Record<string, any>;
    status: 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
    createdAt: Date;
    updatedAt: Date;
    referenceNumber: string;
    paymentStatus?: 'PENDING' | 'PAID' | 'FAILED';
    documents?: ApplicationDocument[];
  }
  
  export interface ApplicationDocument {
    id: string;
    name: string;
    type: string;
    url: string;
    uploadedAt: Date;
  }