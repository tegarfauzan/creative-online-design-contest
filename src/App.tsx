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
          <Route path="/designer/my-submission-details" element={<SubmissionDetails />} />
          <Route path="/designer/my-submission-details-winner" element={<SubmissionDetailsWinner />} />
          <Route path="/designer/my-submission-details-eliminated" element={<SubmissionDetailsEliminated />} />
          <Route path="/owner/my-wallet" element={<MyWalletOwner />} />
          <Route path="/owner/my-wallet-topup" element={<MyWalletTopup />} />
          <Route path="/owner/my-wallet-topup-pending" element={<MyWalletTopupPending />} />
          <Route path="/owner/my-wallet-topup-approved" element={<MyWalletTopupApproved />} />
          <Route path="/owner/my-contests" element={<MyContests />} />
          <Route path="/owner/my-contests-steps" element={<MyContestsAddSteps />} />
          <Route path="/owner/contest-details-tabs" element={<ContestDetailsTabs />} />
          <Route path="/owner/details-winner" element={<DetailsWinner />} />
          <Route path="/owner/contest-submit" element={<ContestSubmitDesign />} />
          <Route path="/owner/manage-contest-details" element={<ManageContestDetails />} />
          <Route path="/owner/manage-contest-has-winner" element={<ManageContestHasWinner />} />
          <Route path="/owner/my-contest-add-success" element={<MyContestsAddSuccess />} />
        </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
