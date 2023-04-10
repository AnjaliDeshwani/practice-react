// const hoc = (Component) => {
//   return () => {
//     const data = "My Data";
//     return <Component style={styles} />;
//   };
// };

export const Hoc = (Component) => {
  return () => {
    const data = "My Data";
    return <Component data={data} />;
  };
};
