// import { Categories } from "../pages/manager/categories/Categories";

// // For Sidebar
export type SidebarLink = {
  label: string;
  path: string;
};

export type SidebarSection = {
  title?: string;
  links: SidebarLink[];
};

export type User = {
  name: string;
  role: string;
  avatarUrl?: string;
};

// Submissions
type SubmissionStatus = "In Review" | "Eliminated" | "Winner";
type ContestStatus = "Open" | "Closed";

type FileInfo = {
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  fileType?: string;
};

export type SubmissionDetail = {
  status: string;
  prize: number;
  description: string;
  previewImageUrl?: string;
  alertMessage?: string;
  files?: {
    masterFile: FileInfo;
    resultFiles: FileInfo[];
  };
};

type Submission = {
  id: string;
  title: string;
  category: string;
  submissionStatus: SubmissionStatus;
  contestStatus: ContestStatus;
  totalSubmissions: number;
  photo: string;
  SubmissionDetail?: SubmissionDetail;
};
export type SubmissionSection = {
  submissions: Submission[];
};

// Manager Overview
export type OverviewData = {
  prize: number;
  contests: number;
  owners: number;
  designers: number;
  categories: number;
  testimonials: number;
};

export type Contest = {
  user: string;
  category: string;
  amount: number; // formatted currency
};

export type Withdrawal = {
  user: string;
  date: string; // ISO or formatted date
  amount: number; // formatted currency
};

// Manager Categories
export type Category = {
  id: number;
  title: string;
  description: string;
  contestCount: number;
};

// Manager Owners
export type Owner = {
  id: number;
  name: string;
  email: string;
  ktp: string;
  gender: "Male" | "Female" | string; // bisa disesuaikan jika ada enum gender
  role: string;
  photo: string;
};

// Manager Designer
export type Designer = {
  id: number;
  name: string;
  email: string;
  ktp: string;
  gender: "Male" | "Female" | string; // bisa disesuaikan jika ada enum gender
  role: string;
  photo: string;
};

export type ManageContest = {
  id: number;
  title: string;
  category: string;
  owner: string;
  photo: string;
};

export type Transaction = {
  id: number;
  photo: string;
  type: "Top Up" | "Prize" | "Withdrawal";
  date: string;
  amount: number;
  status: "Pending" | "Approved" | "Declined";
  method: string;
  userName: string;
  role: string;
};

export type TopUpDetail = {
  user: {
    name: string;
    ktp: string;
    role: string;
    wallet: string;
    status: "Pending" | "Approved" | "Declined";
  };
  note: string;
  paymentAt: string;
  subTotal: number;
  tax: number;
  grandTotal: number;
  insurance: string;
  loyalty: string;
  method: {
    type: string;
    level: string;
  };
  proofImage: string;
};

export type WithdrawalData = {
  userContent?: {
    name: string;
    ktp: string;
    role: string;
    wallet: string;
    status: string;
  };
  message: string;
  requestedAt: string;
  amount: string;
  insurance: string;
  paymentStatus: string;
  bank: {
    name: string;
    accountName: string;
    accountNumber: string;
  };
  paymentMethod: {
    name: string;
    description: string;
  };
  paymentProof: string;
};

export type Role = {
  id: number;
  name: string;
};

type TransactionStatus = "Pending" | "Approved" | "Declined";

export interface DesignerTransaction {
  id: number;
  type: "Withdrawal" | "Prize";
  date: string;
  amount: number;
  status: TransactionStatus;
  method: string;
}

// wallet
export type WalletData = {
  name: string;
  role: string;
  walletName: string;
  status: string;
  balance: number;
  rules?: string[];
};

// Wallet
// Informasi dasar wallet user
export interface WalletInfo {
  walletName: string; // misalnya "Irama Wallet"
  bankName: string; // misalnya "BCA", "Mandiri"
  bankAccountName: string; // misalnya "John Doe"
  bankAccountNumber: string; // misalnya "1234567890"
  isActive: boolean; // status aktif atau tidak
  balance: number; // nominal, misalnya 18000000
}

// Data form untuk melakukan withdrawal atau top up
export interface WalletTransactionForm {
  amount: number; // nominal top up atau withdraw
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  proofOfPayment: File | null; // file bukti transfer
  date: string; // tanggal dalam format ISO (yyyy-mm-dd) atau Date
}

// Data hasil withdrawal atau top up setelah submit
export interface WalletTransactionResult {
  id: number;
  amount: number;
  status: "Pending" | "Approved";
  method: string;
  name: string;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  proofOfPaymentUrl?: string; // jika kamu simpan di server
  date: string; // tanggal transaksi
}

export interface TermsConditionSection {
  items: string[]; // List bullet point
}

// ini datanya
// export type User = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   photo: string;
//   phone: string;
//   gender: string;
//   ktp: string;
// };

// export type Owner = {
//   id: number;
//   user_id: number;
// };

// export type Wallet = {
//   id: number;
//   user_id: number;
//   amount: number;
// };

// export type WalletTransaction = {
//   id: number;
//   wallet_id: number;
//   type: "Topup" | "Withdraw" | "Prize" | "Contest";
//   sub_total: number;
//   tax_total: number | null;
//   grand_total: number;
//   topup_proof?: string | null;
//   withdrawal_proof?: string | null;
//   bank_name?: string | null;
//   bank_acc_name?: string | null;
//   bank_acc_number?: string | null;
//   status: "Pending" | "Approved" | "Declined";
// };

// export type Category = {
//   id: number;
//   name: string;
//   photo: string;
// };

// export type Designer = {
//   id: number;
//   user_id: number;
// };

// export type Contest = {
//   id: number;
//   name: string;
//   photo: string;
//   about: string;
//   category_id: number;
//   references: any; // JSON, bisa ditentukan lebih spesifik jika strukturnya diketahui
//   deliverables: any; // JSON, bisa ditentukan lebih spesifik jika strukturnya diketahui
//   owner_id: number;
//   prize: number;
//   status: string;
//   ended_at: string; // date format (ISO string)
// };

// export type ContestAttachment = {
//   id: number;
//   attachment: string;
//   name: string;
//   contest_id: number;
// };

// export type ContestSubmission = {
//   id: number;
//   content: string;
//   about: string;
//   master_file: string;
//   contest_id: number;
//   designer_id: number;
//   status: string;
// };
