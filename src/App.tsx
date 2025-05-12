import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Overview } from "./pages/Manager/SignInAndDashboard/Overview";
import { SignIn } from "./pages/Manager/SignInAndDashboard/SignIn";
import { Owners } from "./pages/Manager/ManageOwnersAndDesigners/Owners";
import { ManageWallets } from "./pages/Manager/ManageWallets/ManageWallets";
import { Transactions } from "./pages/Manager/ManageTransactions/Transactions";
import { TransactionsTopupPending } from "./pages/Manager/ManageTransactions/TransactionsTopupPending";
import { TransactionsTopupApproved } from "./pages/Manager/ManageTransactions/TransactionsTopupApproved";
import { TransactionsWithdrawalPending } from "./pages/Manager/ManageTransactions/TransactionsWithdrawalPending";
import { TransactionWithdrawalApproved } from "./pages/Manager/ManageTransactions/TransactionsWithdrawalApproved";
import { Categories } from "./pages/Manager/Categories/Categories";
import { AddCategories } from "./pages/Manager/Categories/AddCategories";
import { Contests } from "./pages/Manager/ManageContensts/Contensts";

import { SignUpUsers } from "./pages/Users/SignInAndSignUp/SignUpUsers";
import { SignInUsers } from "./pages/Users/SignInAndSignUp/SignInUsers";

import { MyWalletDesigner } from "./pages/Designer/MyWallet/MyWalletDesigner";
import { MyWalletWithDrawalPending } from "./pages/Designer/MyWallet/MyWalletWithDrawalPending";
import { MyWalletWithDrawalApproved } from "./pages/Designer/MyWallet/MyWalletWithDrawalApproved";
import { MyWalletWithDrawal } from "./pages/Designer/MyWallet/MyWalletWithDrawal";
import { MySubmissions } from "./pages/Designer/ManageSubmissions/MySubmissions";
import { SubmissionDetails } from "./pages/Designer/ManageSubmissions/SubmissionDetails";
import { SubmissionDetailsWinner } from "./pages/Designer/ManageSubmissions/SubmissionDetailsWinner";
import { SubmissionDetailsEliminated } from "./pages/Designer/ManageSubmissions/SubmissionDetailsEliminated";

import { MyWalletOwner } from "./pages/Owner/MyWallet/MyWalletOwner";
import { MyWalletTopup } from "./pages/Owner/MyWallet/MyWalletTopup";
import { MyWalletTopupPending } from "./pages/Owner/MyWallet/MyWalletTopupPending";
import { MyWalletTopupApproved } from "./pages/Owner/MyWallet/MyWalletTopupApproved";
import { MyContests } from "./pages/Owner/CrudContests/MyContests";
import { MyContestsAddSteps } from "./pages/Owner/CrudContests/MyContestsAddSteps";
import { MyContestsAddSuccess } from "./pages/Owner/CrudContests/MyContestsAddSuccess";
import { ContestDetailsTabs } from "./pages/Owner/CrudContests/ContestDetailsTabs";
import { DetailsWinner } from "./pages/Owner/CrudContests/DetailsWinner";
import { ContestSubmitDesign } from "./pages/Owner/CrudContests/ContestSubmitDesign";
import { ManageContestDetails } from "./pages/Owner/CrudContests/ManageContestDetails";
import { ManageContestHasWinner } from "./pages/Owner/CrudContests/ManageContestHasWinner";
// import { AuthProvider } from "./providers/AuthProvider";

// ✅ Create a QueryClient instance for React Query
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <Routes>
          {/* Manager */}
          <Route path="/manager/sign-in" element={<SignIn />} />
          <Route path="/manager/overview" element={<Overview />} />
          <Route path="/manager/owners" element={<Owners />} />
          <Route path="/manager/wallets" element={<ManageWallets />} />
          <Route path="/manager/transactions" element={<Transactions />} />
          <Route path="/manager/transactions/topup/pending" element={<TransactionsTopupPending />} />
          <Route path="/manager/transactions/topup/approved" element={<TransactionsTopupApproved />} />
          <Route path="/manager/transactions/withdrawal/pending" element={<TransactionsWithdrawalPending />} />
          <Route path="/manager/transactions/withdrawal/approved" element={<TransactionWithdrawalApproved />} />
          <Route path="/manager/categories" element={<Categories />} />
          <Route path="/manager/categories/add" element={<AddCategories />} />
          <Route path="/manager/contests" element={<Contests />} />

          {/* Public/User */}
          <Route path="/" element={<SignUpUsers />} />
          <Route path="/sign-in" element={<SignInUsers />} />

          {/* Designer */}
          <Route path="/designer/wallet" element={<MyWalletDesigner />} />
          <Route path="/designer/wallet/withdrawal" element={<MyWalletWithDrawal />} />
          <Route path="/designer/wallet/withdrawal/pending" element={<MyWalletWithDrawalPending />} />
          {/* if approved */}
          <Route path="/designer/wallet/withdrawal/approved" element={<MyWalletWithDrawalApproved />} />
          {/* end if approved */}
          <Route path="/designer/submissions" element={<MySubmissions />} />
          <Route path="/designer/submissions/details" element={<SubmissionDetails />} />
          <Route path="/designer/submissions/details/winner" element={<SubmissionDetailsWinner />} />
          <Route path="/designer/submissions/details/eliminated" element={<SubmissionDetailsEliminated />} />

          {/* Owner */}
          <Route path="/owner/wallet" element={<MyWalletOwner />} />
          <Route path="/owner/wallet/topup" element={<MyWalletTopup />} />
          <Route path="/owner/wallet/topup/pending" element={<MyWalletTopupPending />} />
          {/* if approved */}
          <Route path="/owner/wallet/topup/approved" element={<MyWalletTopupApproved />} />
          {/* end if approved */}
          <Route path="/owner/contests" element={<MyContests />} />
          <Route path="/owner/contests/add-steps" element={<MyContestsAddSteps />} />
          <Route path="/owner/contests/add/success" element={<MyContestsAddSuccess />} />
          <Route path="/owner/contests/manage-details" element={<ManageContestDetails />} />
          {/* if winner */}
          <Route path="/owner/contests/has-winner" element={<ManageContestHasWinner />} />
          {/* end if winner */}
          <Route path="/owner/contests/details-tabs" element={<ContestDetailsTabs />} />
          <Route path="/owner/contests/details-winner" element={<DetailsWinner />} />
          <Route path="/owner/contests/submit" element={<ContestSubmitDesign />} />
        </Routes>

        {/* </AuthProvider> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
