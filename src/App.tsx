import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OverviewPage } from "./pages/Manager/SignInAndDashboard/OverviewPage";
import { SignIn } from "./pages/Manager/SignInAndDashboard/SignIn";
import { SignInUsers } from "./pages/Designer/SignInAndSignUp/SignInUsers";
import { Owners } from "./pages/Manager/ManageOwnersAndDesigners/Owners";
import { ManageWallets } from "./pages/Manager/ManageWallets/ManageWallets";
import { Transactions } from "./pages/Manager/ManageTransactions/Transactions";
import { TransactionsTopupPending } from "./pages/Manager/ManageTransactions/TransactionsTopupPending";
import { TransactionsTopupApproved } from "./pages/Manager/ManageTransactions/TransactionsTopupApproved";
import { TransactionsWithdrawalPending } from "./pages/Manager/ManageTransactions/TransactionsWithdrawalPending";
import { TransactionWithdrawalApproved } from "./pages/Manager/ManageTransactions/TransactionsWithdrawalApproved";
import { Categories } from "./pages/Manager/Categories/Categories";
import { AddCategories } from "./pages/Manager/Categories/AddCategories";
import { ContestsPage } from "./pages/Manager/ManageContensts/Contensts";
import { SignUpUsers } from "./pages/Designer/SignInAndSignUp/SignUpUsers";
import { MyWallet } from "./pages/Designer/MyWallet/MyWallet";
import { MyWalletWithDrawalPending } from "./pages/Designer/MyWallet/MyWalletWithDrawalPending";
import { MyWalletWithDrawalApproved } from "./pages/Designer/MyWallet/MyWalletWithDrawalApproved";
import { MyWalletWithDrawal } from "./pages/Designer/MyWallet/MyWalletWithDrawal";
import { MySubmissions } from "./pages/Designer/ManageSubmissions/MySubmissions";
// import { AuthProvider } from "./providers/AuthProvider";

// ✅ Create a QueryClient instance for React Query
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/manager/overview" element={<OverviewPage />} />
          <Route path="/manager/owners" element={<Owners />} />
          <Route path="/manager/manage-wallets" element={<ManageWallets />} />
          <Route path="/manager/transactions" element={<Transactions />} />
          <Route path="/manager/transactions-topup-pending" element={<TransactionsTopupPending />} />
          <Route path="/manager/transactions-topup-approved" element={<TransactionsTopupApproved />} />
          <Route path="/manager/transactions-withdrawal-pending" element={<TransactionsWithdrawalPending />} />
          <Route path="/manager/transactions-withdrawal-approved" element={<TransactionWithdrawalApproved />} />
          <Route path="/manager/category" element={<Categories />} />
          <Route path="/manager/category/add" element={<AddCategories />} />
          <Route path="/manager/contests" element={<ContestsPage />} />
          <Route path="/users/sign-in" element={<SignInUsers />} />
          <Route path="/users/sign-up" element={<SignUpUsers />} />
          <Route path="/designer/my-wallet" element={<MyWallet />} />
          <Route path="/designer/my-wallet-withdrawal" element={<MyWalletWithDrawal />} />
          <Route path="/designer/my-wallet-withdrawal-pending" element={<MyWalletWithDrawalPending />} />
          <Route path="/designer/my-wallet-withdrawal-approved" element={<MyWalletWithDrawalApproved />} />
          <Route path="/designer/my-submissions" element={<MySubmissions />} />
        </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
