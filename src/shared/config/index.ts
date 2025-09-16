export const createSidebarLinks = () => {
  let res = [];
  res.push(
    { id: 1, name: "Avito client", icon: "book", url: "/" },
    { id: 1, name: "Avito editor", icon: "book", url: "/editor" },
    { id: 2, name: "Firms", icon: "dashboard", url: "/firms" },
    { id: 3, name: "Log In", icon: "login", url: "/login" }
  );

  return res;
};
