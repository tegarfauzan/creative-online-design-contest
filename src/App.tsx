import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Overview } from "./pages/manager/sign_in_and_dashboard/Overview";
import { SignIn } from "./pages/manager/sign_in_and_dashboard/SignIn";
import { Owners } from "./pages/manager/manage_owners_and_designers/Owners";
import { ManageWallets } from "./pages/manager/manage_wallets/ManageWallets";
import { Transactions } from "./pages/manager/manage_transactions/Transactions";
import { TransactionsTopup } from "./pages/manager/manage_transactions/TransactionsTopup";
import { TransactionsWithdrawal } from "./pages/manager/manage_transactions/TransactionsWithdrawal";
import { Categories } from "./pages/manager/categories/Categories";
import { AddCategories } from "./pages/manager/categories/AddCategories";
import { Contests } from "./pages/manager/manage_contensts/Contensts";

import { SignUpUsers } from "./pages/users/sign_in_and_sign_up/SignUpUsers";
import { SignInUsers } from "./pages/users/sign_in_and_sign_up/SignInUsers";

import { MyWalletDesigner } from "./pages/designer/my_wallet/MyWalletDesigner";;
import { MyWalletWithDrawal } from "./pages/designer/my_wallet/MyWalletWithDrawal";
import { MySubmissions } from "./pages/designer/manage_submissions/MySubmissions";
import { SubmissionDetails } from "./pages/designer/manage_submissions/SubmissionDetails";

import { MyWalletOwner } from "./pages/owner/my_wallet/MyWalletOwner";
import { MyWalletTopup } from "./pages/owner/my_wallet/MyWalletTopup";
import { MyWalletTopupPending } from "./pages/owner/my_wallet/MyWalletTopupPending";
import { MyWalletTopupApproved } from "./pages/owner/my_wallet/MyWalletTopupApproved";
import { MyContests } from "./pages/owner/crud_contests/MyContests";
import { MyContestsAddSteps } from "./pages/owner/crud_contests/MyContestsAddSteps";
import { MyContestsAddSuccess } from "./pages/owner/crud_contests/MyContestsAddSuccess";
import { ContestDetailsTabs } from "./pages/owner/crud_contests/ContestDetailsTabs";
import { DetailsWinner } from "./pages/owner/crud_contests/DetailsWinner";
import { ContestSubmitDesign } from "./pages/owner/crud_contests/ContestSubmitDesign";
import { ManageContestDetails } from "./pages/owner/crud_contests/ManageContestDetails";
import { ManageContestHasWinner } from "./pages/owner/crud_contests/ManageContestHasWinner";
import { MyWalletWithDrawalStatus } from "./pages/designer/my_wallet/MyWalletWithDrawalStatus";
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
          <Route path="/manager/transactions/topup/" element={<TransactionsTopup />} />
          <Route path="/manager/transactions/withdrawal/" element={<TransactionsWithdrawal />} />
          <Route path="/manager/categories" element={<Categories />} />
          <Route path="/manager/categories/add" element={<AddCategories />} />
          <Route path="/manager/contests" element={<Contests />} />

          {/* Public/User */}
          <Route path="/" element={<SignUpUsers />} />
          <Route path="/sign-in" element={<SignInUsers />} />

          {/* Designer */}
          <Route path="/designer/wallet" element={<MyWalletDesigner />} />
          <Route path="/designer/wallet/withdrawal" element={<MyWalletWithDrawal />} />
          <Route path="/designer/wallet/withdrawal/status" element={<MyWalletWithDrawalStatus />} />
          <Route path="/designer/submissions" element={<MySubmissions />} />
          <Route path="/designer/submissions/details" element={<SubmissionDetails />} />

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
