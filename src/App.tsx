import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OverviewPage } from "./pages/Manager/SignInAndDashboard/OverviewPage";
import { SignIn } from "./pages/Manager/SignInAndDashboard/SignIn";
import { Owners } from "./pages/Manager/ManageOwnersAndDesigners/Owners";
import { ManageWallets } from "./pages/Manager/ManageWallets/ManageWallets";
import { Transactions } from "./pages/Manager/ManageTransactions/Transactions";
import { TransactionsTopupPending } from "./pages/Manager/ManageTransactions/TransactionsTopupPending";
import { TransactionsTopupApproved } from "./pages/Manager/ManageTransactions/TransactionsTopupApproved";
// import { AuthProvider } from "./providers/AuthProvider";

// ✅ Create a QueryClient instance for React Query
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
            <Route path="/manager/signin" element={<SignIn />} />
            <Route path="/manager/overview" element={<OverviewPage />} />
            <Route path="/manager/owners" element={<Owners />} />
            <Route path="/manager/manage-wallets" element={<ManageWallets />} />
            <Route path="/manager/transactions" element={<Transactions />} />
            <Route path="/manager/transactions-topup-pending" element={<TransactionsTopupPending />} />
            <Route path="/manager/transactions-topup-approved" element={<TransactionsTopupApproved />} />
      </Routes>
      {/* </AuthProvider> */}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
