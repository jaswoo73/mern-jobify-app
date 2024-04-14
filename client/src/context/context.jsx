// import { createContext, useContext, useState } from "react";

// const DashboardContext = createContext();
// const DashboardProvider = ({ children }) => {
//   const user = { name: "john" };
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleDarkTheme = () => {
//     console.log("toggled dark theme");
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const logoutUser = async () => {
//     console.log("logout user");
//   };

//   return (
//     <DashboardContext.Provider
//       value={{
//         user,
//         showSidebar,
//         isDarkTheme,
//         toggleDarkTheme,
//         toggleSidebar,
//         logoutUser,
//       }}
//     >
//       {children}
//     </DashboardContext.Provider>
//   );
// };

// export const useDashboardContext = () => useContext(DashboardContext);
// export default DashboardProvider;
